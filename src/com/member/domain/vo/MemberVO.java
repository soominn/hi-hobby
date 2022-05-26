package com.member.domain.vo;

public class MemberVO { // 여기에 담겨서 데이터가 전송되어야함
   private int memberNumber;
   private String memberId;
   private String memberName;
   private String memberPw;
   private String memberGender;
   private String memberAddress;
   private String memberAddressDetail;
   
   // 접근제어가자가 private 이기 때문에, 메소드 (public)를 통해 변수에 접근한다. set(세팅)/ get(가져오기)
   
   public MemberVO() {;}

   public int getMemberNumber() {
      return memberNumber;
   }

   public void setMemberNumber(int memberNumber) {
      this.memberNumber = memberNumber;
   }

   public String getMemberId() {
      return memberId;
   }

   public void setMemberId(String memberId) {
      this.memberId = memberId;
   }

   public String getMemberName() {
      return memberName;
   }

   public void setMemberName(String memberName) {
      this.memberName = memberName;
   }

   public String getMemberPw() {
      return memberPw;
   }

   public void setMemberPw(String memberPw) {
      this.memberPw = memberPw;
   }

   public String getMemberGender() {
      return memberGender;
   }

   public void setMemberGender(String memberGender) {
      this.memberGender = memberGender;
   }

   public String getMemberAddress() {
      return memberAddress;
   }

   public void setMemberAddress(String memberAddress) {
      this.memberAddress = memberAddress;
   }

   public String getMemberAddressDetail() {
      return memberAddressDetail;
   }

   public void setMemberAddressDetail(String memberAddressDetail) {
      this.memberAddressDetail = memberAddressDetail;
   }
   
}