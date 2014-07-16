'use strict';

/* Controllers */

angular.module('dataCube.controllers', [])  
  .controller('EURegionMap', ["$scope",function(scope) {

         
         
         scope.data=
                    {
                        //title:"Titulek dat",             
                        data:[
                            {
                                name:2009,
                                data:[
                                    
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/HR0',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/FR62',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/DE41',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CY0',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/FR22',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/IE01',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/FI13',
                                        y:1200
                                    }

                                ]
                            },
                            {
                                name:2010,
                                data:[
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0100',
                                        y:1100
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0202',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0643',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0421',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0321',
                                        y:1200
                                    }

                                ]
                            },{
                                name:2011,
                                data:[
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0100',
                                        y:1000
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0202',
                                        y:1500
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0643',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0421',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0321',
                                        y:1200
                                    }

                                ]
                            },{
                                name:2012,
                                data:[
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0100',
                                        y:1000
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0202',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0643',
                                        y:1200
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0421',
                                        y:1500
                                    },
                                    {
                                        tickValue:'http://linked.opendata.cz/resource/region/CZ0321',
                                        y:1200
                                    }

                                ]
                            },
                        ]
                    }   
             
            
//             scope.data.data.pop()
             
             
             
         
            
          
        scope.changeData=function(){            
            
            //scope.data.data[0].data[0].y+=500;
            scope.data.data[0].data.pop()
            
            
        }  
                
                
         
    
        
  }]);
