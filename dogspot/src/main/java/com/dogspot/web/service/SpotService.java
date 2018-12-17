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

	//����Ʈ ������(�˻�)
	List<Spot> getList();
	//����Ʈ������(������)
	List<Spot> getList(int page);
	List<Spot> getList(String query);
	List<Spot> getList(int page, String query);
	SpotImg getSpotImg(int spotId);
	
	//������ ������
	Spot getSpot(int spotId);
	List<Review> getReviewList(int spotId);
	List<SpotImg> getSpotImgList(int spotId);
	int insertRecent(int spotId, String memberId);
	int insertSpotRequest(SpotRequest spotRequest, String memberId);
	
	//���ƿ�
	List<Good> getGoodList(String reviewId);

	//���
	List<Cmt> getCmtList(String cmtId);

	//��ȸ��
	int getHit(int reviewId);
			
	//��� ���� 
	Favorite getFavoriteList(int spotId, String memberId);
	int setFavorite(int spotId, String memberId);
	
	//�߰�
	int insert(Spot spot);
	int insertSpotImgList(List<SpotImg> spotImgList);
	List<Theme> getTheme(); //�ߺ�����
	int insertTheme(Theme theme);
	
	//����, ����
	int update(int spotId, Spot spot);
	int delete(int spotId);
	
	//�ֱٺ���� ������
	List<Recent> getRecentList(String memberId);
	List<Recent> getRecentList(String memberId, int page);
	
	//���ã�� ������
	List<Favorite> getFavoriteList(String memberId, int page);
	List<Favorite> getFavoriteList();
	
	//������û
	List<SpotRequest> getSpotRequestList();
	List<SpotRequest> getSpotRequestList(int page);
	SpotRequest getSpotRequest(String memberId, int spotId);
}
