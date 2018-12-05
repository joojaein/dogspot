package com.dogspot.web.service;

import java.util.List;

import com.dogspot.web.entity.Cmt;
import com.dogspot.web.entity.Favorite;
import com.dogspot.web.entity.Good;
import com.dogspot.web.entity.Member;
import com.dogspot.web.entity.Review;

public interface MemberService {
	Member getMember(String memberId);
	int insert(Member member);
	
	Member getMember(String name, String email);
	Member getMember(String memberId,String name, String email);
	Member getMember(String memberId,String name, String email, String answer);

	List<Favorite> getFavoriteList(String memberId);
	List<Review> getReviewList(String memberId);
	List<Good> getGoodList(String memberId);
	List<Cmt> getCmtList(String memberId);

}
