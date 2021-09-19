const dir_association = {
	"en": "ltr",
	"ru": "ltr",
	"ar": "rtl"
};

const locale_settable_ids = ["label_title", "label_firstname", "label_lastname",
	"label_email", "label_company", "label_city", "label_message", "label_submit",
	"success_message", "exception_message"];

const translations = {
	"en": {
		"label_title": "Form title",

		"label_firstname": "first name*:",
		"label_lastname": "last name*:",
		
		"label_email": "email*:",
		"label_company": "company:",
		"label_city": "city*:",
		"label_message": "message*:",

		"label_submit": "Send",
		"success_message": "Form is submitted successfully.",
		"exception_message": "An error occurred during form submission."
	},
	"ru": {
		"label_title": "Заглавие формы",

		"label_firstname": "имя*:",
		"label_lastname": "фамилия*:",
		
		"label_email": "эл. почта*:",
		"label_company": "название компании:",
		"label_city": "город*:",
		"label_message": "сообщение*:",

		"label_submit": "Отправить",
		"success_message": "Данные формы успешно отправлены.",
		"exception_message": "При обработке формы возникла ошибка."

	},

	"ar": {
		"label_title": "<img class='dont_ban_pls' src='https://sun9-68.userapi.com/impg/c853628/v853628443/1dc3fa/a3XHU6mG3gU.jpg?size=1080x636&quality=96&sign=14625f753d0fb923a4020c6b26c0ee12&type=album' /><br />عنوان النموذج",

		"label_firstname": "الاسم الأول*:",
		"label_lastname": "اسم العائلة*:",
		
		"label_email": "البريد الإلكتروني*:",
		"label_company": "الشركة:",
		"label_city": "المدينة*:",
		"label_message": "الرسالة*:",

		"label_submit": "إرسال",
		"success_message": "إرسال النموذج بنجاح",
		"exception_message": "حدث خطأ أثناء تقديم النموذج"
	},
};