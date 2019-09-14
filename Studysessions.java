



public class studySessions {
     private String ssname;
     private String sstopic;
     private String sstime;
     private String sslocation;
     private ArrayList<User> listAttending;
	 


     public studySession(String name, String topic, String time, String sslocation)  {
		ssname = name;
        sstopic = topic;
        sstime = time;
        sslocation = location;
	 }

     public String getSSName {
         return ssname;
     }
     public String getSSTopic {
         return sstopic;
     }
     public String getSSLocation {
         return sslocation;
     }
     
     public String getSSTime {
         return sstime;
     }

     public showListAttending {

          for(int i =0; i < listAttending.size(); i++) {
           
           System.out.println(listAttending(i).getName());
           System.out.println(listAttending(i).getMajor());
           System.out.println(listAttending(i).getYear());
        System.out.println();
          }


     }

    public joinStudySession {

      listAttending.add(this.User);


    }

     





}






