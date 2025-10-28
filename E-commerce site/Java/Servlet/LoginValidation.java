package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.JOptionPane;

import com.DBConnection.DatabaseConnectivity;



@WebServlet("/*")
public class LoginValidation extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

       String username = request.getParameter("username");
       String password = request.getParameter("password");
       
//       JOptionPane.showMessageDialog(null, "Before" + username);
//       JOptionPane.showMessageDialog(null, password);
       
       
       try {
    	   Connection con = DatabaseConnectivity.getConnection();
    	   PreparedStatement st = con.prepareStatement("SELECT username, password FROM user_register WHERE username=?");
    	   st.setString(1, username);
    	   ResultSet rs = st.executeQuery();
    	  
    	  while(rs.next()) {
    	  
    	  String user =  rs.getString("username");
          String pass =  rs.getString("password");
        	  
//    	  JOptionPane.showMessageDialog(null, "After" + user);
//          JOptionPane.showMessageDialog(null, pass);
    	  
    	  if(username.equals(user) && password.equals(pass)) {
       	   out.write("{\"status\":\"success\"}");
//       	   JOptionPane.showMessageDialog(null, "Login Successful!"); 
          }else {
       	   out.write("{\"status\":\"failed\"}");
//       	   JOptionPane.showMessageDialog(null, "Login Failed!");
          } 
    	 }  
       }catch(Exception e){
    	   System.out.println(e);
       }  
	}
}
