$(document).ready(function(){
	var obj = [
		{
			'country_name': '中国',
			'languages': [
				'簡体中文'
			],
			'flag': 'flag-icon-cn',
			'link': [
				'../'
			],
			'icon': 'cn'
		},
		{
			'country_name': '台灣',
			'languages': [
				'繁體中文'
			],
			'flag': 'flag-icon-tw',
			'link': [
				'#'
			],
			'icon': 'tw'
		},
		{
			'country_name': '日本国',
			'languages': [
				'日本語'
			],
			'flag': 'flag-icon-jp',
			'link': [
				'../jp/'
			],
			'icon': 'jp'
		},
		{
			'country_name': 'UK',
			'languages': [
				'English'
			],
			'flag': 'flag-icon-um',
			'link': [
				'../en/'
			],
			'icon': 'uk'
		},
		{
			'country_name': 'Vietnam',
			'languages': [
				'Tiếng Việt'
			],
			'flag': 'flag-icon-vn',
			'link': [
				'#'
			],
			'icon': 'vn'
		},
		{
			'country_name': 'Indonesia',
			'languages': [
				'Bahasa'
			],
			'flag': 'flag-icon-id',
			'link': [
				'../id/'
			],
			'icon': 'id'
		},
		{
			'country_name': 'Malaysia',
			'languages': [
				'Bahasa Melayu',
				'English',
				'繁體中文'
			],
			'flag': 'flag-icon-my',
			'link': [
				'../my-bm/',
				'../my-en/',
				'#'
			],
			'icon': 'my'
		},
		{
			'country_name': 'ไทย',
			'languages': [
				'ภาษาไทย'
			],
			'flag': 'flag-icon-th',
			'link': [
				'../th/'
			],
			'icon': 'th'
		},
		{
			'country_name': 'India',
			'languages': [
				'हिन्दी'
			],
			'flag': 'flag-icon-in',
			'link': [
				'../in/'
			],
			'icon': 'in'
		}
	];

	$(obj).each(function(k,v){
		$('#drop')
			.append('<div class="language-picker"><div class="grey" id="country'+k+'" data-value="'+k+'"><span class="flag-icon '+v.flag+'"></span><span class="cntry" data-value="'+v.country_name+'" data-icon="'+v.icon+'">'+ v.country_name + '</span><span class="language"></span></div></div>');

		$('#drop2ul')
			.append('<li><a href="javascript:void(0)" id="country2'+ k +'" data-value="'+ k +'"><span class="flag-icon '+v.flag+'"> </span> '+ v.country_name +'<span class="languages"></span></a></li>');
	});

	$('#drop .grey').each(function(){
		var divNum = $(this).attr('data-value');
		$(obj[divNum].languages).each(function(k,v){
			$('#country'+divNum+'>.language').append("<span class='language-span' style='margin-left: 25px; white-space: nowrap'><a href='"+ obj[divNum].link[k] +"'>"+ v +"</a></span>");
		})
	});

	$('#drop2 li a').each(function(){
		var divNum = $(this).attr('data-value');
		$(obj[divNum].languages).each(function(k,v){
			$('#country2'+divNum+' .languages').append('<span class="m-languages">'+ v +'</span>');
		})
	});

	$.each(obj, function(index, value) {
		$('.selectpicker2-menu ul').append('<li class="li'+ index +'"><div class="flag-icon '+ value.flag +'"></div><div class="country"><a href="#">'+ value.country_name +'</a></div><div class="languages"></div></li>');
	});

	$.each($('.selectpicker2-menu ul li'), function(index, value) {
		$.each(obj[index].languages, function(i, v) {
			$('.selectpicker2-menu ul .li'+index+' .languages').append('<a href="'+ obj[index].link[i] +'" class="language'+ i +'">'+ v +'</a>');
		})
	})

	$('.language-span a').hover(function() {
		$(this).css('color','#fba601');
	}, function() {
		$(this).css('color','#fff');
	});

	var the_icon = '';
	$('.cntry').click(function() {
		$('.selectpicker2-val').removeClass('selectpicker2-'+the_icon);
		$('.selectpicker2-val').addClass('selectpicker2-'+$(this).data('icon'));
		$('.selectpicker2-val').html(' '+$(this).data('value'));
		the_icon = $(this).data('icon');
	})
});
