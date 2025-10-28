package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import javax.swing.JOptionPane;

import com.DBConnection.DatabaseConnectivity;

@WebServlet("/Register")
public class UserRegistration extends HttpServlet{
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
//		HttpSession session = request.getSession(false);
//		String id_user = (String) session.getAttribute("iduser_register");
//		session.getAttribute(id_user);
//		
//		System.out.println(id_user);

		String fullname = request.getParameter("fullname");
		String username = request.getParameter("username");
		String email = request.getParameter("email");
		String phone_number = request.getParameter("phone_number");
		String password = request.getParameter("password");
		String confirm_password = request.getParameter("confirm_password");
		String address = request.getParameter("address");
		String address2 = request.getParameter("address2");
		String city = request.getParameter("city");
		String state = request.getParameter("state");
		String zipcode = request.getParameter("zipcode");

		try {
			Connection con = DatabaseConnectivity.getConnection();
			PreparedStatement ps = con.prepareStatement(
					"INSERT INTO user_register (fullname, username, email, phone_number, password, confirm_password, address, address2, city, state, zipcode) "
							+ "	VALUES (?,?,?,?,?,?,?,?,?,?,?)");
			ps.setString(1, fullname);
			ps.setString(2, username);
			ps.setString(3, email);
			ps.setString(4, phone_number);
			ps.setString(5, password);
			ps.setString(6, confirm_password);
			ps.setString(7, address);
			ps.setString(8, address2);
			ps.setString(9, city);
			ps.setString(10, state);
			ps.setString(11, zipcode);

			int row = ps.executeUpdate();
			
			if(row > 0) {
				JOptionPane.showMessageDialog(null, "Registered Successful!");
				out.write("{\"status\":\"success\"}");
			}else {
				JOptionPane.showMessageDialog(null, "Failed to Register!");
				out.write("{\"status\":\"failed\"}");
			}

		} catch (Exception e) {
			System.out.println(e);
		}
	}

}
