import { Question } from "./classes/question";
import { Survey } from "./classes/survey";

var q1 = new Question(true, "Q1");
var q2 = new Question(true, "Q2");

var survey = new Survey(true, "Test Survey");
survey.addQuestion(q1);
survey.addQuestion(q2);

console.log(survey);