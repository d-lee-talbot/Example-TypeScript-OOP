"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var question_1 = require("./classes/question");
var survey_1 = require("./classes/survey");
var q1 = new question_1.Question(true, "Q1");
var q2 = new question_1.Question(true, "Q2");
var survey = new survey_1.Survey(true, "Test Survey");
survey.addQuestion(q1);
survey.addQuestion(q2);
console.log(survey);
