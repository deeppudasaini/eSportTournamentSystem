module.exports = {
    checkAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
          res.json({
                status: 'success',
                message: 'User is authenticated'
            });
      
        return next();
      }
      
      res.json({
        success: false,
        message: 'Please log in to view that resource'
      });
    },
    afterAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.json({
          success: true,
           message: 'User is authenticated' 
      })
    }
  };