$('#clock').countdown('2015/11/20', function(event) {
2   var $this = $(this).html(event.strftime(''
3     + '<span>%w</span> weeks '
4     + '<span>%d</span> days '
5     + '<span>%H</span> hr '
6     + '<span>%M</span> min '
7     + '<span>%S</span> sec'));
8 });