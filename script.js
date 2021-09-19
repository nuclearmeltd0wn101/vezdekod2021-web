const info_messages_display_timeout_milliseconds = 5000;

let regexp_repetition_3ormorebutO = /([^О])\1{2,}/;
let regexp_repetition_3moreO = /(О)\1{3,}/;
let regexp_repetition_nonnumletters = /([^0-9a-zA-Zа-яА-Я])\1+/;
let regexp_email = /[a-zA-Z](([.\-_0-9a-zA-Z]){0,})[@](([.\-_0-9a-zA-Z]){1,})[.](([a-zA-Z]){2,3})/;

let success_msg_timer_id;
let exception_msg_timer_id;

function form_validate()
{
	let result = true;
	let ids_check_mandatory = ["form_firstname", "form_lastname", "form_city", "form_msg"];
	let ids_to_cleanup = ids_check_mandatory.concat(["form_email"]);

	ids_to_cleanup.forEach(
		(id) => document.getElementById(id).style.borderColor = ""
		);

	ids_check_mandatory.forEach(
		(id) =>
		{
			let element = document.getElementById(id);
			if ((element.value.length < 5)
				|| regexp_repetition_nonnumletters.test(element.value)
				|| regexp_repetition_3ormorebutO.test(element.value)
				|| regexp_repetition_3moreO.test(element.value)
				)
			{
				result = false;
				element.style.borderColor = "red";
			}
		}
		);

	let email_element = document.getElementById("form_email");
	let match = email_element.value.match(regexp_email);
	if (!(Boolean(match) && (match[0] == email_element.value)))
	{
		result = false;
		email_element.style.borderColor = "red";
	}
	
	return result;
}

function form_submit_callback()
{
	if (!form_validate())
		return;

	if (Math.random() < 0.5)
	{
		exception_message_display();
		return;
	}

	console.log("submit");

	let data = {
		"firstname": document.getElementById("form_firstname").value,
		"lastname": document.getElementById("form_lastname").value,
		"email": document.getElementById("form_email").value,
		"company": document.getElementById("form_company").value,
		"city": document.getElementById("form_city").value,
		"message": document.getElementById("form_msg").value,
	};

	var xhr = new XMLHttpRequest();

	var body = ("firstname=" + encodeURIComponent(data["firstname"])
		+ "&lastname=" + encodeURIComponent(data["lastname"])
		+ "&email=" + encodeURIComponent(data["email"])
		+ "&company=" + encodeURIComponent(data["company"])
		+ "&city=" + encodeURIComponent(data["city"])
		+ "&message=" + encodeURIComponent(data["message"]));

	xhr.open("POST", '/submit.php', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = (event) =>
	{
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)
		{
			success_message_display();
		}
		else
		{
			exception_message_display()
		}

		console.log(xhr);
	};

	xhr.send(body);
}

const success_msg_element = document.getElementById("success_message");
const exception_msg_element = document.getElementById("exception_message");

function success_message_display()
{
	clearTimeout(success_msg_timer_id);
	clearTimeout(exception_msg_timer_id);
	success_msg_element.style.display = "block";
	exception_msg_element.style.display = "none";
	success_msg_timer_id = setTimeout(() =>
		{
			success_msg_element.style.display = "none";
		}, info_messages_display_timeout_milliseconds);
}

function exception_message_display()
{
	clearTimeout(success_msg_timer_id);
	clearTimeout(exception_msg_timer_id);
	success_msg_element.style.display = "none";
	exception_msg_element.style.display = "block";
	exception_msg_timer_id = setTimeout(() =>
		{
			exception_msg_element.style.display = "none";
		}, info_messages_display_timeout_milliseconds);
}


function set_lang(lang)
{
	document.getElementById("lang_select").value = lang; // update lang select 

	let lang_btns = document.getElementsByClassName("lang_select_btn");
	for (let i = 0; i < lang_btns.length; i++) // update lang select alt buttons
	{
		let btn = lang_btns[i];
		btn.classList.remove('active');
		if (btn.innerText == lang)
			btn.classList.add('active');
	};


	document.getElementsByClassName("wrapper")[0].dir = dir_association[lang];
	locale_settable_ids.forEach((id) =>
		{
			document.getElementById(id).innerHTML = translations[lang][id];
		}
	);
}

set_lang("en");
