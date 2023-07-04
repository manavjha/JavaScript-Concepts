const actionDescriptionMap = {
    FORM: {text:"Form", Desc:"Name has answered a question on that need your review"},
    APPOINTMENT: {text:"Appointment", Desc:"A patient responded with a text message that we need your help with"},
    FEEDBACK: {text:"Feedback", Desc:"you have received a feedback from Name"},
    
    }; 

    console.log(actionDescriptionMap.FORM.Desc)

    console.log(Object.keys(actionDescriptionMap)[0])

    const actionFilterMap = {
        APPT_REQUEST: { text: "Appt Request", filters: ["AR", "AC", "ASF"] },
        FORM: { text: "Form", filters: ["UPFS", "FSRS", "FURAS", "FWAPS"] },
        APPOINTMENT: { text: "Appointment", filters: ["CR", "UMR"] },
        PAYMENT: { text: "Payment", filters: ["PR"] },
        REVIEW: { text: "Review", filters: ["URR"] },
        FEEDBACK: { text: "Feedback", filters: ["FR"] }
      }

      const x = Object.keys(actionFilterMap)
      console.log(x)