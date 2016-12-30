meducap.factory('auth', function(LSFactory){
  var userKey = '_user';
  var passcode = '_passcode';
  var tokenKey = '_token';
  var userId =  '_userId';
  var schoolKey = 'schools';
  var hospitalKey = 'hospitals';

  var basicAuth = '_basicAuth';
  var lastSyncTime = 'lastSyncTime';
  var AuthAPI = {



    isLoggedIn : function(){
      return this.getUser() == null?false:true;
    },
    getUser: function(){
      return LSFactory.get(userKey);
    },
    getUserId: function(){
      return LSFactory.get(userId);
    },
    getSchools: function(){
      return LSFactory.get(schoolKey);
    },
    getHospital: function(){
      return LSFactory.get(hospitalKey);
    },
    getBasicAuth: function () {
      return LSFactory.get(basicAuth);
    },
    getToken: function(){
      return LSFactory.get(tokenKey)
    },
    getTime: function(){
      return LSFactory.get(lastSyncTime);
    },
    setTime: function(time){
      return LSFactory.set(lastSyncTime, time)
    },
    setUser: function(user){
      return LSFactory.set(userKey,user)
    },
    setArrSchool: function(school){
      var schools = this.getSchools();
      if(!schools || schools == null) {
        schools = [];
      }
      schools.push(school);
      return LSFactory.set(schoolKey, schools);
    },
    resetArrSchool: function(schools) {
      return LSFactory.set(schoolKey, schools);
    },
    resetArrHospital: function(hospital) {
      return LSFactory.set(hospitalKey, hospital);
    },
    setUserId: function(id) {
      return LSFactory.set(userId, id)
    },
    setArrHospital: function(hospital){
      var hospitals = this.getHospital();
      if(!hospitals || hospitals == null) {
        hospitals = [];
      }
      hospitals.push(hospital);
      return LSFactory.set(hospitalKey, hospitals);
    },
    //setUserId: function(id) {
    //  return LSFactory.set(userId, id)
    //},
    //setPassword: function(password){
    //  return LSFactory.set(userKey,password)
    //},
    setToken: function(token){
      return LSFactory.set(tokenKey, token)
    },
    setBasicAuth: function(user, password) {
      var tok = user + ':' + password;
      var hash = btoa(tok);
      var basicAuthToken =  "Basic " + hash;
      return LSFactory.set(basicAuth, basicAuthToken)
    },
    deleteSchools: function(){
      LSFactory.delete(schoolKey);
    },
    deleteHospitals: function(){
      LSFactory.delete(hospitalKey);
    },
    deleteAuth: function(){
      LSFactory.delete(userKey);
      LSFactory.delete(passcode);
      LSFactory.delete(tokenKey);
      LSFactory.delete(basicAuth);
      LSFactory.delete(userId);

    }


  };
  return AuthAPI

});



meducap.factory('LSFactory', function(){
  var LSAPI = {
    clear: function(){
      return localStorage.clear();

    },
    get: function(key){

      return JSON.parse(localStorage.getItem(key));

    },
    set: function(key,data) {
      return localStorage.setItem(key, JSON.stringify(data));
    },
    delete: function(key) {
      return localStorage.removeItem(key)
    }

  };
  return LSAPI

});
