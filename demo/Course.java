package com.purduestudyapp.demo;

public class Course{
    public String code;
    public String title;
    public String professor;
    public String location;
    public int[] meetingTimes = new int[7];
/*      index 0 = Sunday, index 6 = Saturday
*       Format: 9 digits (first digit: always 1, next 4: start time, last 4: end time)
*/

    public Course(String code, String title, String professor, String location, int[] meetingTimes){
      this.code = code;
      this.title = title;
      this.professor = professor;
      this.location = location;
      this.meetingTimes = meetingTimes;
    }

    public void setCode(String code){this.code = code;}
    public void setTitle(String title){this.title = title;}
    public void setProfessor(String professor){this.professor = professor;}
    public void setLocation(String location){this.location = location;}
    
    public void setMeetingTimes(int[] meetingTimes){this.meetingTimes = meetingTimes;}
    public void setSunday(int start, int end){meetingTimes[0] = 100000000 + start*10000 + end;}
    public void setMonday(int start, int end){meetingTimes[1] = 100000000 + start*10000 + end;}
    public void setTuesday(int start, int end){meetingTimes[2] = 100000000 + start*10000 + end;}
    public void setWednesday(int start, int end){meetingTimes[3] = 100000000 + start*10000 + end;}
    public void setThursday(int start, int end){meetingTimes[4] = 100000000 + start*10000 + end;}
    public void setFriday(int start, int end){meetingTimes[5] = 100000000 + start*10000 + end;}
    public void setSaturday(int start, int end){meetingTimes[6] = 100000000 + start*10000 + end;}



    public String getCode(){return code;}
    public String getTitle(){return title;}
    public String getProfessor(){return professor;}
    public String getLocation(){return location;}
    public int[] getMeetingTimes(){return meetingTimes;}



    
}
