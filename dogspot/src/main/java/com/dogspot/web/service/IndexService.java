package com.dogspot.web.service;

import java.util.List;

import com.dogspot.web.entity.Cmt;
import com.dogspot.web.entity.Favorite;
import com.dogspot.web.entity.Good;
import com.dogspot.web.entity.Member;
import com.dogspot.web.entity.Review;
import com.dogspot.web.entity.Spot;

public interface IndexService {
	List<Spot> getFavoriteTop6();
	
}
