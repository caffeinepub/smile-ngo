import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type VolunteerApplication = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    interestArea : Text;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  var volunteerApplications = Array.empty<VolunteerApplication>();
  var contactMessages = Array.empty<ContactMessage>();

  public shared ({ caller }) func submitVolunteerApplication(name : Text, email : Text, phone : Text, message : Text, interestArea : Text) : async () {
    let application : VolunteerApplication = {
      name;
      email;
      phone;
      message;
      interestArea;
    };
    let newApplications = Array.empty<VolunteerApplication>();
    volunteerApplications := volunteerApplications.concat(newApplications);
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, phone : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      name;
      email;
      phone;
      message;
    };
    let newMessages = Array.empty<ContactMessage>();
    contactMessages := contactMessages.concat(newMessages);
  };

  public query ({ caller }) func getAllVolunteerApplications() : async [VolunteerApplication] {
    volunteerApplications;
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages;
  };

  public query ({ caller }) func getVolunteerApplicationByEmail(email : Text) : async VolunteerApplication {
    let applicationsIter = volunteerApplications.values();
    let filtered = applicationsIter.filter(
      func(application) {
        application.email == email;
      }
    ).toArray();

    switch (filtered.size()) {
      case (0) { Runtime.trap("No application found with the given email") };
      case (_) { filtered[0] };
    };
  };

  public query ({ caller }) func getContactMessageByEmail(email : Text) : async ContactMessage {
    let messagesIter = contactMessages.values();
    let filtered = messagesIter.filter(
      func(contactMessage) {
        contactMessage.email == email;
      }
    ).toArray();

    switch (filtered.size()) {
      case (0) { Runtime.trap("No contact message found with the given email") };
      case (_) { filtered[0] };
    };
  };
};
