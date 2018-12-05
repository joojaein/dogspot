package com.dogspot.web.service;

import java.util.List;

import com.dogspot.web.entity.Cmt;
import com.dogspot.web.entity.Good;
import com.dogspot.web.entity.Member;
import com.dogspot.web.entity.Review;

public interface AdminService {
	List<Member> getMemberList();
	List<Review> getReviewList();
	List<Cmt> getCmtList();
	List<Good> getGoodList();
}
