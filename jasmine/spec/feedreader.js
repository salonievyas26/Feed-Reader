
$(function() {
    
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('url is defined',function()
            {
                for (feed of allFeeds)
                {
                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).not.toBe(0);

                }
            });


       

         it('name is defined',function()
            {
                for (feed of allFeeds)
                {
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
                }
            });

    });


    
        describe('The menu' , function(){

        

         it('menu is hidden', function (){

            expect($('body').hasClass('menu-hidden')).toBe(true);

         });


         

          
          it('menu is toggled', function ()
          {
                //click evvent is triggered 
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(false);
                 $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(true);

                
            });

 });

        

   
    	describe('Initial Entries', function (){


         beforeEach(function(done) {
            loadFeed(0,done);
            
        });

          it('has at least one element in feed container', function ()
            {

                    expect($('.feed .entry').length).not.toBe(0);
            });

      });



    


         describe('New Feed Selection', function (){

            //new content is actually loaded

            var oldHtml ;

            beforeEach(function(done) {
                loadFeed(0, function() {
                    oldHtml = $('.feed').html();
                    loadFeed(1, done);
                });
            });

            it('Content actually changes', function(){

                expect($('.feed').html()).not.toBe(oldHtml);


            })


         });


    

        
}());
