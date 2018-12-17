package com.dogspot.web.service;

import java.util.List;

import com.dogspot.web.entity.Cmt;
import com.dogspot.web.entity.Favorite;
import com.dogspot.web.entity.Good;
import com.dogspot.web.entity.Recent;
import com.dogspot.web.entity.Review;
import com.dogspot.web.entity.Spot;
import com.dogspot.web.entity.SpotImg;
import com.dogspot.web.entity.SpotRequest;
import com.dogspot.web.entity.Theme;

public interface SpotService {

	//리스트 페이지(검색)
	List<Spot> getList();
	//리스트페이지(관리자)
	List<Spot> getList(int page);
	List<Spot> getList(String query);
	List<Spot> getList(int page, String query);
	SpotImg getSpotImg(int spotId);
	
	//디테일 페이지
	Spot getSpot(int spotId);
	List<Review> getReviewList(int spotId);
	List<SpotImg> getSpotImgList(int spotId);
	int insertRecent(int spotId, String memberId);
	int insertSpotRequest(SpotRequest spotRequest, String memberId);
	
	//좋아요
	List<Good> getGoodList(String reviewId);

	//댓글
	List<Cmt> getCmtList(String cmtId);

	//조회수
	int getHit(int reviewId);
			
	//상단 공통 
	Favorite getFavoriteList(int spotId, String memberId);
	int setFavorite(int spotId, String memberId);
	
	//추가
	int insert(Spot spot);
	int insertSpotImgList(List<SpotImg> spotImgList);
	List<Theme> getTheme(); //중복제거
	int insertTheme(Theme theme);
	
	//수정, 삭제
	int update(int spotId, Spot spot);
	int delete(int spotId);
	
	//최근본목록 페이지
	List<Recent> getRecentList(String memberId);
	List<Recent> getRecentList(String memberId, int page);
	
	//즐겨찾기 페이지
	List<Favorite> getFavoriteList(String memberId, int page);
	List<Favorite> getFavoriteList();
	
	//수정요청
	List<SpotRequest> getSpotRequestList();
	List<SpotRequest> getSpotRequestList(int page);
	SpotRequest getSpotRequest(String memberId, int spotId);
}
