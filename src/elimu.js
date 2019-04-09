select = '';
var select = '<option value = "0">SELECT SUBJECT </option>'
var subjects = [{
  x: "English"
}, {
  x: "Mathematics"
}, {
  x: "Biology"
}, {
  x: "Chemistry"
}, {
  x: "Agriculture"
}, {
  x: "Science"
}, {
  x: "Computer Studies"
}, {
  x: "CRE"
}, {
  x: "Geography"
  }];
var English =[{
  question: "What is 2*5?",
  choices: [2, 5, 10, 15, 20],
  correctAnswer: 2
}, {
  question: "What is 3*6?",
  choices: [3, 6, 9, 12, 18],
  correctAnswer: 4
}, {
  question: "What is 8*9?",
  choices: [72, 99, 108, 134, 156],
  correctAnswer: 0
}, {
  question: "What is 1*7?",
  choices: [4, 5, 6, 7, 8],
  correctAnswer: 3
}, {
  question: "What is 8*8?",
  choices: [20, 30, 40, 50, 64],
  correctAnswer: 4
}];

var questions = [{
    question: "Who was the first president of kenya?",
    choices: ["moi", "kibaki", "jaramogi", "oginga", "kenyata"],
    correctAnswer: "kenyata"
  },
  {
    question: "When did kenya attain independence?",
    choices: [2007, 2002, "MauMau", 1963, 1961],
    correctAnswer: 1963
  }, {
    question: "Who was  the first prime minister in kenya?",
    choices: ["Oginga Odinga", "Kenyatta", "Moi", "Raila Odinga", "Joseph Kariuki"],
    correctAnswer: "Oginga Odinga"
  }, {
    question: "Who is the current president of kenya",
    choices: ["Raila Odinga", "Kibaki", "William Ruto", "Uhuru Kenyata", "Kabogo"],
    correctAnswer: "Uhuru Kenyata"
  }, {
    question: "How many conties does kenya have",
    choices: [10, 30, 42, 47, 64],
    correctAnswer: 47
  }]


subjects.forEach(function (subject) {
  select += `<option id="options" value="${subject.x}"> ${subject.x}</option>`;
  document.getElementById("select").innerHTML = select;
  document.getElementById("select").addEventListener('change', function (evt) {
    getQuestions(evt.target.value);
  });
});

function getQuestions(reg) {
  var questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }];

  var questions = [{
      question: "Who was the first president of kenya?",
      choices: ["moi", "kibaki", "jaramogi", "oginga", "kenyata"],
      correctAnswer: "kenyata"
    },
    {
      question: "When did kenya attain independence?",
      choices: [2007, 2002, "MauMau", 1963, 1961],
      correctAnswer: 1963
    }, {
      question: "Who was  the first prime minister in kenya?",
      choices: ["Oginga Odinga", "Kenyatta", "Moi", "Raila Odinga", "Joseph Kariuki"],
      correctAnswer: "Oginga Odinga"
    }, {
      question: "Who is the current president of kenya",
      choices: ["Raila Odinga", "Kibaki", "William Ruto", "Uhuru Kenyata", "Kabogo"],
      correctAnswer: "Uhuru Kenyata"
    }, {
      question: "How many conties does kenya have",
      choices: [10, 30, 42, 47, 64],
      correctAnswer: 47
    }
  ];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object

  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if (quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if (quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if (quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    var progress = $('<progress class="progress" value="'+(index)+'" max="'+questions.length+'">');
    qElement.append(progress);

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>' + (index + 1) + '. </p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function () {
      $('#question').remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
        }
        // Controls display of 'prev' button
        if (questionCounter === 1) {
          $('#prev').show();
        } else if (questionCounter === 0) {
          $('#prev').hide();
          $('#next').show();
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>', {
      id: 'question'
    });

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    var percentage = numCorrect / questions.length * 100;
    if (percentage <= 40) {
      score.append('Your Score is :  ' + percentage + ' %  This is below the passmark');
      return score;
    } else {
      score.append('Score :  ' + percentage + ' %  Congraturations, You can now proceed to the next exam');
      return score;
    }
  }
};
