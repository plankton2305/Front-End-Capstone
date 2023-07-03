import Api from './index.js';

class Questions {

  constructor() {
    this.api = new Api('qa');
  }

  getQuestions(productId, count = 1000, page = 1) {
    return this.api.get(`/questions?product_id=${productId}&count=${count}&page=${page}`);
  }

  post(productId, data) {
    return this.api.post(`/questions?product_id=${productId}`, data);
  }

  markQuestionHelpful(questionId) {
    return this.api.put(`/questions/${questionId}/helpful`);
  }

  reportQuestion(questionId) {
    return this.api.put(`/questions/${questionId}/report`);
  }



  markAnswerHelpful(answerId) {
    return this.api.put(`/answers/${answerId}/helpful`);
  }

  reportAnswer(answerId) {
    return this.api.put(`/answers/${answerId}/report`);
  }


}

export default new Questions();