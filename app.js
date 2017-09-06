(function () {
    var app = angular.module('formModule', ['rzModule', 'ui.bootstrap']);

    app.controller('FormController', function () {
        this.text = text;
    });

    app.controller('QuestionsController', function ($scope) {
        this.question = 0;
        this.progress = 15;
        this.isValid = true;
        this.thumbsUp = 0;
        this.thumbsDown = 0;
        this.answers = {
            first: 700,
            second: 48,
            third: true,
            fourthSearch: "know",
            fifthPrefix: "+370",
        };

        this.addThumbsUp = function(){
            this.thumbsUp++;
            this.setQuestion(0);
        };

        this.addThumbsDown = function () {
            this.thumbsDown++;
            this.setQuestion(0);
        };

        this.setQuestion = function (value) {
            this.question = value;
            this.progress = value * 17;
        };

        this.isQuestion = function (value) {
            return this.question === value;
        };

        this.setValidation = function (value) {
            this.isValid = value;
        };

        this.goBack = function () {
            this.setValidation(true);
            this.setQuestion(this.question - 1);
        }

        this.validateAnswer = function () {
            switch (this.question) {
                case 1:
                    if ((this.answers.first >= 700) && (this.answers.first <= 2000)) {
                        this.setQuestion(this.question + 1);
                        this.setValidation(true);
                    }
                    else {
                        this.setValidation(false);
                    }
                    break;
                case 2:
                    if ((this.answers.second >= 48) && (this.answers.second <= 60)) {
                        this.setQuestion(this.question + 1);
                        this.setValidation(true);
                    }
                    else {
                        this.setValidation(false);
                    }
                    break;
                case 3:
                    this.setQuestion(this.question + 1);
                    break;
                case 4:
                    if ((this.answers.fourthSalary >= 1) || (this.answers.fourthSearch === 'dknow-yes') || (this.answers.fourthSearch === 'dknow-no')) {
                        this.setQuestion(this.question + 1);
                        this.setValidation(true);
                    }
                    else {
                        this.setValidation(false);
                    }
                    break;
                case 5:
                    if (this.answers.fifthPrefix === '+46') {
                        if ((this.answers.fifthNumber > 1) && (this.answers.fifthNumber.toString().length >= 6) && (this.answers.fifthNumber.toString().length <= 9)) {
                            this.setQuestion(this.question + 1);
                            this.setValidation(true);
                        }
                        else {
                            this.setValidation(false);
                        }
                    }
                    else {
                        if ((this.answers.fifthNumber > 1) && (this.answers.fifthNumber.toString().length === 8)) {
                            this.setQuestion(this.question + 1);
                            this.setValidation(true);
                        }
                        else {
                            this.setValidation(false);
                        }
                    }
                    break;
                default:
                    this.setQuestion(value);
            }

        };

        this.submitForm = function () {
            this.answers = {
                first: 700,
                second: 48,
                third: true,
                fourthSearch: "know",
                fifthPrefix: "+370",
            };
            this.setValidation(true);
            this.setQuestion(7);
        }

        $scope.sliderAmount = {
            options: {
                floor: 700,
                ceil: 2000,
                step: 1
            }
        };

        $scope.sliderPeriod = {
            options: {
                floor: 48,
                ceil: 60,
                step: 1
            }
        };
    });

    var defaultAnswers = {
        first: 700,
        second: 48,
        third: true,
        fourthSearch: "know",
        fifthPrefix: "+370",
    };

    var text = {
        title: "Are you in need of some extra money?",
        intro: "Don't worry, Swedbank is ready to help you out! Complete a quick application, wait for our call and enjoy your life with full pockets of money. Too good to be true? See for yourself!",
        firstPic: "Answer few questions",
        secondPic: "Wait for our call",
        thirdPic: "Take your money",
        firstQuestion: "How much money would you like to receive (in euros)?",
        firstError: "The amount has to be between 700 - 2000 euros",
        secondQuestion: "How much time would you need to return the loan (in months)?",
        secondError: "The period has to be between 48 - 60 months",
        thirdQuestion: "What is your current employment status?",
        fourthQuestionHasJob: "What is your monthly salary after tax deduction?",
        fourthErrorHasJob: "Please, enter your salary",
        fourthQuestionHasNotJob: "What do you think your next job salary will be after tax deduction?",
        fourthErrorHasNotJob: "Please, enter correct salary",
        fifthQuestion: 'What is your contact phone number?',
        fifthError: 'Wrong phone number digits length',
        checkData: "Almost done! Confirm the final information of your application for a loan",
        lastWord: "That's all - we got your application! Now wait for our call!",
        feedback: "Please let us know if you liked the proccess of this loan request"
    }
})();