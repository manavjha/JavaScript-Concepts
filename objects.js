const actionEventTypeMap = {
    UNFAVORABLE_REVIEW_RECEIVED: "URR",
    UNCLASSIFIED_MESSAGE_RECEIVED: "UMR",
    CALLBACK_REQUESTED: "CR",
    FEEDBACK_RECEIVED: "FR",
    APPOINTMENT_REQUESTED: "AR",
    APPOINTMENT_SYNC_FAILED: "ASF",
    APPOINTMENT_CONFLICTED: "AC",
    PAYMENT_RECEIVED: "PR",
    GENERAL_FORM_SUBMISSION_PRACTICE_ALERT: "FWAPS",
    FORM_SUBMISSION_REQUIRE_STAFF_SIGNATURE: "FSRS",
    UNKNOWN_PATIENT_FORM_SUBMITTED: "UPFS",
    GENERAL_FORM_SUBMISSION_UNKNOWN_REFERRAL_ALERT: "FURAS",
    GENERAL_FORM_SUBMISSION_REQUIRE_DOCTOR_SIGNATURE: "FRDS"
  };
  Object.prototype.getKeyByValue = function( value ) {
      for( var prop in this ) {
          if( this.hasOwnProperty( prop ) ) {
               if( this[ prop ] === value )
                   return prop;
          }
      }
  }

 console.log(actionEventTypeMap.getKeyByValue( "URR" ))