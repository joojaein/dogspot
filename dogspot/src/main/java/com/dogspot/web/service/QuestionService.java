package com.dogspot.web.service;

import java.util.List;

import com.dogspot.web.entity.Question;

public interface QuestionService {

	int insert(Question question);
	int updateQuestion(int questionId);
	int updateAnswer(int questionId);
	
	int deleteQuestion(int questionId);
	int deleteAnswer(int questionId);
	
	List<Question> getList();
	List<Question> getList(int page);
	List<Question> getList(String memberId);
	
	Question getQuestion(int questionId);
		
}
