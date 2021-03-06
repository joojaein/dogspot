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

	//리스트 페이지
	List<Review> getList();
	List<Review> getList(String query);
	List<HashMap<String, String>> getReviewsDataView(String query, int filter);
	HashMap<String, String> getReviewDataView(int reviewId);
	
	
	//디테일 페이지
	Review getReview(int reviewId);
	List<ReviewImg> getReviewImgList(int reviewId);
	ReviewImg getReviewImg(int reviewId, int index);

	//상단 공통
	ReviewImg getReviewImg(int reviewId);
	String getReviewImgSrc(int reviewId);
	List getReviewImgsSrc(int reviewId);
	////메모 참고
	
	//추가
	int insert(Review review);
	int getLastReviewId();
	//int getLastReviewImgId();
	int getOrderNum(int reviewId); 
	List<Spot> getSpotList(String query);
	int insertReviewImg(String fileName, int reviewId, int ord);
	int insertReviewImgList(List<ReviewImg> reviewImgList);

	//수정
	int update(int reviewId, Review review);

	//삭제
	int delete(int reviewId);

	//내가쓴리뷰 	
	List<Review> getMyList(String memberId);
	List<Review> getMyList(String memberId, int page);

	//좋아요
	List<Good> getGoodList(String memberId);
	List<Good> getGoodList(String memberId, int page);
	int setGood(int reviewId, String memberId, String updown);
	int getIsGood(int reviewId, String memberId);
	//댓글
	List<Cmt> getCmtList(String memberId);
	List<Cmt> getCmtList(int reviewId);
	List<Cmt> getCmtList(String memberId, int page);
	int insertCmt(Cmt cmt);
	int updateCmt(int cmtId, String content);
	int deleteCmt(int cmtId);
	//조회수
	int updateHit(int reviewId);
	int getHit(int reviewId);
	
	//신고
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
