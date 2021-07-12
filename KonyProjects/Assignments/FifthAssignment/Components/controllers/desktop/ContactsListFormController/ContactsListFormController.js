define({ 

 //Type your controller code here 
  
  segDataList:[
    {name:"Ivan Stoikov",
     email:"ivst@nz.com",
     phoneNumber:"078745148",
     notes:"",
     imageURL:""      
    },
    {name:"Hristo Penchev",
     email:"hrpenchev@mg.com",
     phoneNumber:"047845541",
     notes:"No",
     imageURL:"img.png"      
    },
    {name:"Stefan Manchev",
     email:"stmanchev!ae.com",
     phoneNumber:"0878542",
     notes:"Call me yesterday",
     imageURL:"no"      
    },
    {name:"Ivana Petkova",
     email:"ivpetkova@apd.com",
     phoneNumber:"057789462",
     notes:"Classmate",
     imageURL:"petkova@am.com"      
    },
    {name:"Boryana Dimitrova",
     email:"bdimitrova@acv.com",
     phoneNumber:"048967846",
     notes:"coleague",
     imageURL:""      
    },
    {name:"Nevena Petrova",
     email:"npetrova@ad.com",
     phoneNumber:"07898987",
     notes:"No notes",
     imageURL:"petrova.png"      
    },
  ],
    
  formatedData: [],
  
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },  

  init: function() {
    this.formatedSegmentData.call(this,this.segDataList,this.formatedData);
    this.view.ContactsList.onRowClick = this.onRowClicked;
  },

  preShow: function() {
    this.view.ContactsList.setData(this.formatedData);
  },

   onRowClicked: function() {
    var indexOfSelectedRow = this.view.ContactsList.selectedRowIndex[1];
    var contactData = this.segDataList[indexOfSelectedRow];
    kony.store.setItem("contactDetails", contactData);
     
    var navigateToContactDetails = new kony.mvc.Navigation("ContactDetails");
    navigateToContactDetails.navigate();
  },
  
  formatedSegmentData: function(responseData,fomratedData) {
    var scope = this;
    responseData.forEach(function(contact) {
      fomratedData.push({       
        "ContactName": {"text": contact.name ? contact.name : "N/A"},
        "ContactEmail": {"text": contact.email},
        "ContactPhoneNumber": {"text": contact.phoneNumber},
        "ContactNotes": {"text":contact.notes}
      });
    });
  },  

 });