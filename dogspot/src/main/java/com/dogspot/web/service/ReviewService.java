package com.dogspot.web.service;

import java.util.HashMap;
import java.util.List;

import com.dogspot.web.entity.Cmt;
import com.dogspot.web.entity.CmtComplain;
import com.dogspot.web.entity.Good;
import com.dogspot.web.entity.Member;
import com.dogspot.web.entity.Review;
import com.dogspot.web.entity.ReviewComplain;
import com.dogspot.web.entity.ReviewImg;
import com.dogspot.web.entity.Spot;
import com.dogspot.web.entity.SpotImg;

public interface ReviewService {

	//����Ʈ ������
	List<Review> getList();
	List<Review> getList(String query);
	List<HashMap> getReviewDataView(String query, int filter);
	
	//������ ������
	Review getReview(int reviewId);
	List<ReviewImg> getReviewImgList(int reviewId);
	ReviewImg getReviewImg(int reviewId, int index);

	//��� ����
	ReviewImg getReviewImg(int reviewId);

	////�޸� ����
	
	//�߰�
	int insert(Review review);
	List<Spot> getSpotList(String query);
	int insertReviewImgList(List<ReviewImg> reviewImgList);
	
	//����
	int update(int reviewId, Review review);

	//����
	int delete(int reviewId);

	//���������� 	
	List<Review> getMyList(String memberId);
	List<Review> getMyList(String memberId, int page);

	//���ƿ�
	List<Good> getGoodList(String memberId);
	List<Good> getGoodList(String memberId, int page);
	int setGood(int reviewId, String memberId);

	//���
	List<Cmt> getCmtList(String memberId);
	List<Cmt> getCmtList(String memberId, int page);
	int insertCmt(Cmt cmt);
	int updateCmt(int cmtId, Cmt cmt);

	//��ȸ��
	int insertHit(int reviewId, String memberId);
	int getHit(int reviewId);
	
	//�Ű�
	int insertReviewComplain(ReviewComplain reviewComplain);
	int insertCmtComplain(CmtComplain cmtComplain);
	List<ReviewComplain> getReviewComplainList();
	List<ReviewComplain> getReviewComplainList(int page);
	ReviewComplain getReviewComplain(String memberId, int reviewId);
	
	List<CmtComplain> getCmtComplainList();
	List<CmtComplain> getCmtComplainList(int page);
	CmtComplain getCmtComplain(String memberId, int cmtId);

	Member getMemberReviewWriter(int reviewId);
	Member getMemberCmtWriter(int cmtId);
	
	int insertWarningToReview(int reviewId);
	int insertWarningToCmt(int cmtId);
	int insertWarningToMember(Member member);
}
