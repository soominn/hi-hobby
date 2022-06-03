package com.hi_hobby.user;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.hi_hobby.action.Action;
import com.hi_hobby.action.ActionInfo;
import com.hi_hobby.domain.dao.UserDAO;

public class CreatorLoginOk implements Action {

	@Override
	public ActionInfo execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
		String userEmail = req.getParameter("userEmail");
		String userPw= req.getParameter("userPw");
		HashMap<String, String> userMap = new HashMap<>();
		UserDAO userDAO = new UserDAO();
		int userNum = 0;
		ActionInfo actionInfo = new ActionInfo();
		HttpSession session = req.getSession();
		
//		userPw = new String(Base64.getEncoder().encode(userPw.getBytes()));
		
		userMap.put("userId", userEmail);
		userMap.put("userPw", userPw);
		
		userNum = userDAO.login(userMap);
		userDAO.setCreator(userNum);
		
		System.out.println(userNum);
		session.setAttribute("userNum", userNum);
		
		actionInfo.setRedirect(false);
		actionInfo.setPath("/createrCenter.jsp" );
		
		return actionInfo;
	}

}
