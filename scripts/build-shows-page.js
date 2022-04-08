const API_URL = 'https://project-1-api.herokuapp.com/';
const API_Key = 'e0eea5f0-0f8c-4b54-9fc4-ff50843766d4';

function myShowsSection() {
    axios
        .get(`${API_URL}showdates?api_key=${API_Key}`)
        .then(response => {
            console.log(response);
            const newAPIShows = response.data

            newAPIShows.forEach(info => {

                const showsContainer = document.createElement('div');
                showsContainer.classList.add('shows-container');

                const unorderedList = document.createElement('ul');
                unorderedList.classList.add('shows-container-ul')

                const ticketButton = document.createElement('button')
                ticketButton.classList.add('shows__button');
                ticketButton.innerText = ('BUY TICKETS');

                ticketButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    console.log("Venue Location: ", info.place);
                    console.log("Location: ", info.location);
                })

                const cardDivider = document.createElement('hr');
                cardDivider.classList.add('shows__divider');

                const showsDateContainer = document.createElement('ul');
                showsDateContainer.classList.add('shows__date-container');

                const showsDates = document.createElement('li');
                showsDates.classList.add('shows__dates', 'shows__subheader');
                showsDates.innerText = ('Date')

                const showsDateInfo = document.createElement('li');
                showsDateInfo.classList.add('shows-date__info', 'shows__info');
                showsDateInfo.innerText = DateFormatter(parseInt(info.date));


                const showsVenueContainer = document.createElement('ul');
                showsVenueContainer.classList.add('shows__venue-container');

                const showsVenue = document.createElement('li')
                showsVenue.classList.add('shows__venue', 'shows__subheader');
                showsVenue.innerText = ('Venue');

                const showsVenueInfo = document.createElement('li')
                showsVenueInfo.classList.add('shows-venue__info', 'shows__info');
                showsVenueInfo.innerText = info.place;

                const showsLocationContainer = document.createElement('ul')
                showsLocationContainer.classList.add('shows-location__container')

                const showsLocation = document.createElement('li');
                showsLocation.classList.add('shows__location', 'shows__subheader');
                showsLocation.innerText = ('Location');

                const showsLocationInfo = document.createElement('li');
                showsLocationInfo.classList.add('shows-location__info', 'shows__info');
                showsLocationInfo.innerText = info.location;

                showsDynamicContainer.appendChild(showsContainer);
                showsDynamicContainer.appendChild(cardDivider);
                showsContainer.appendChild(unorderedList);
                showsContainer.appendChild(ticketButton);
                unorderedList.appendChild(showsDateContainer);
                showsDateContainer.appendChild(showsDates);
                showsDateContainer.appendChild(showsDateInfo);
                unorderedList.appendChild(showsVenueContainer);
                showsVenueContainer.appendChild(showsVenue);
                showsVenueContainer.appendChild(showsVenueInfo);
                unorderedList.appendChild(showsLocationContainer);
                showsLocationContainer.appendChild(showsLocation);
                showsLocationContainer.appendChild(showsLocationInfo);
            });
        })
}

