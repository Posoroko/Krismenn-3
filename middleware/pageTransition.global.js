export default defineNuxtRouteMiddleware((to, from) => {   
        if (import.meta.client) {


            to.meta.pageTransition = { 
                name: to.meta.enterFrom
            };

            if(to.meta.enterFrom === 'left') {
                from.meta.pageTransition = { 
                    name: 'right'
                };
            } else if(to.meta.enterFrom === 'right') {
                from.meta.pageTransition = { 
                    name: 'left'
                };
            } else if(to.meta.enterFrom === 'fade') {
                from.meta.pageTransition = { 
                    name: 'fade'
                };
            } else if(to.meta.enterFrom === 'bottom') {
                from.meta.pageTransition = { 
                    name: 'top'
                };
            }

         }
    
    

})