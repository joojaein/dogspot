package com.dogspot.web.service.jdbc;

import java.util.List;

import com.dogspot.web.entity.Question;
import com.dogspot.web.service.QuestionService;

public class JdbcQuestionService implements QuestionService {

	@Override
	public int insert(Question question) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateQuestion(int questionId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateAnswer(int questionId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteQuestion(int questionId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteAnswer(int questionId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Question> getList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Question> getList(int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Question> getList(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Question getQuestion(int questionId) {
		// TODO Auto-generated method stub
		return null;
	}

}
