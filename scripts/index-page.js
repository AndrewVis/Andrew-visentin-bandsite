const commentData = [
  {

      name: 'Connor Walton',
      timestamp: '02/17/2021',
      comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
  {

      name: 'Emilie Beach',
      timestamp: '01/09/2021',
      comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
  },
  {

      name: 'Miles Acosta',
      timestamp: '12/20/2020',
      comment: "I can't stop listening. Everytime I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Cant get enough"
  }
];


const createComments = document.querySelector('.comments');

const commentsContainer = document.createElement('div');
commentsContainer.classList.add('comments-container');

createComments.appendChild(commentsContainer);

function displayComment() {

  console.log(commentData)
  commentData.forEach(info => {
      console.log(info);


      const createContainer = document.createElement('div');
      createContainer.classList.add('comments__card')

      const createAvatar = document.createElement('div')
      createAvatar.classList.add('comments__image')

      const unorderedList = document.createElement('ul');
      unorderedList.classList.add('comments-container-ul')

      const commentDataContainer = document.createElement('div')
      commentDataContainer.classList.add('comments-data-container');

      const commentsName = document.createElement('li');
      commentsName.classList.add('comments__name');
      commentsName.innerText = info.name;

      const commentsTimeStamp = document.createElement('li')
      commentsTimeStamp.classList.add('comments__timestamp')
      commentsTimeStamp.innerText = info.timestamp;

      const commentsDescriptionContainer = document.createElement('ul');
      commentsDescriptionContainer.classList.add('comments-description-container')

      const commentsDescription = document.createElement('li');
      commentsDescription.classList.add('comments__description')
      commentsDescription.innerText = info.comment;


      createContainer.appendChild(createAvatar);
      commentsContainer.appendChild(createContainer);
      createContainer.appendChild(commentDataContainer);
      commentDataContainer.appendChild(unorderedList);
      unorderedList.appendChild(commentsName);
      unorderedList.appendChild(commentsTimeStamp);
      commentDataContainer.appendChild(commentsDescriptionContainer);
      commentsDescriptionContainer.appendChild(commentsDescription);

  })
}

const commentsForm = document.querySelector('#commentsForm')

commentsForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const dateFormat = new Date();
  let dateFormatString;


  dateFormat.setDate(dateFormat.getDate());

  dateFormatString = ('0' + dateFormat.getDate()).slice(-2) + '/'
      + ('0' + (dateFormat.getMonth() + 1)).slice(-2) + '/'
      + dateFormat.getFullYear();

  let newComment = {
      name: event.target.fullName.value,
      timestamp: dateFormatString,
      comment: event.target.comment.value,
  };

  commentData.unshift(newComment);
  commentsContainer.innerHTML = '';
  displayComment(commentData);

  event.target.reset();


});
displayComment()