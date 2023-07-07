import Api from './index.js';

class Questions {

  constructor() {
    this.api = new Api('qa');
  }

  getQuestions(productId, count = 750, page = 1) {
    return this.api.get(`/questions?product_id=${productId}&count=${count}&page=${page}`);
  }

  postQuestion(data) {
    return this.api.post(`/questions`, data);
  }

  markQuestionHelpful(questionId) {
    return this.api.put(`/questions/${questionId}/helpful`);
  }

  reportQuestion(questionId) {
    return this.api.put(`/questions/${questionId}/report`);
  }

  postAnswer(questionId, data) {
    // const planktonsCatchPhrases = [
    //   "Krabs!",
    //   "Goodbye everyone, I'll remember you all in therapy.",
    //   "That's it Mister! You just lost your brain privileges!",
    //   "Holographic meatloaf! My favorite!",
    //   "I went to college!",
    //   "Hey I'm Plankton, welcome to my chum bucket!",
    //   "Be Assertive! Not Insertive!"
    // ];

    // for (let i = 0; i < 20; i++) {
    //   data.body = planktonsCatchPhrases[Math.floor(Math.random() * planktonsCatchPhrases.length)];
    //   this.api.post(`/questions/${questionId+i}/answers`, data);
    // }
    return this.api.post(`/questions/${questionId}/answers`, data);
  }

  markAnswerHelpful(answerId) {
    return this.api.put(`/answers/${answerId}/helpful`);
  }

  reportAnswer(answerId) {
    return this.api.put(`/answers/${answerId}/report`);
  }


}

export default new Questions();