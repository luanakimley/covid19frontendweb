/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validation1(form) {
    
    let isValid = true;
    let errorText = "";
    
    if (form.email.value == "")
    {
        errorText = "* You need to enter an e-mail";
        isValid = false;
    }
    
    if (!isValid)
    {
        document.getElementById("error").innerHTML = errorText;
        return false;
    }
    
}

function validation2(form) {
    
    let isValid_name = true;
    let isValid_surname = true;
    let isValid_phone = true;
    let isValid_email = true;
    let isValid_birth = true;
    let isValid_address1 = true;
    let isValid_city = true;
    let isValid_province = true;
    let isValid_location = true;
    let isValid_testdate = true;
    let isValid_price = true;
    let isValid_paymethod = true;
    let isValid_cardnum = true;
    let isValid_cvv = true;
    let isValid_cardname = true;
    
    let errorText_name = "";
    let errorText_surname = "";
    let errorText_phone = "";
    let errorText_email = "";
    let errorText_birth = "";
    let errorText_address1 = "";
    let errorText_city = "";
    let errorText_province = "";
    let errorText_location = "";
    let errorText_testdate = "";
    let errorText_price = "";
    let errorText_paymethod = "";
    let errorText_cardnum = "";
    let errorText_cvv = "";
    let errorText_cardname = "";
    
    if (form.name.value == "")
    {
        errorText_name = "* You need to enter your first name";
        isValid_name = false;
        
    }
    
    if (!isValid_name)
    {
        document.getElementById("error").innerHTML = errorText_name;
        return false;
    }
    
    if (form.surname.value == "")
    {
        errorText_surname = "* You need to enter your surname";
        isValid_surname = false;
        
    }
    
    if (!isValid_surname)
    {
        document.getElementById("error").innerHTML = errorText_surname;
        return false;
    }
    
    if (form.phone.value == "")
    {
        errorText_phone = "* You need to enter your phone number";
        isValid_phone = false;
        
    }
    
    if (!isValid_phone)
    {
        document.getElementById("error").innerHTML = errorText_phone;
        return false;
    }
    
    if (form.email.value == "")
    {
        errorText_email = "* You need to enter your e-mail";
        isValid_email = false;
        
    }
    
    if (!isValid_email)
    {
        document.getElementById("error").innerHTML = errorText_email;
        return false;
    }
    
    if (form.birth.value == "")
    {
        errorText_birth = "* You need to enter your birthday";
        isValid_birth = false;
        
    }
    
    if (!isValid_birth)
    {
        document.getElementById("error").innerHTML = errorText_birth;
        return false;
    }
    
    if (form.address1.value == "")
    {
        errorText_address1 = "* You need to enter your address";
        isValid_address1 = false;
        
    }
    
    if (!isValid_address1)
    {
        document.getElementById("error").innerHTML = errorText_address1;
        return false;
    }
    
    if (form.city.value == "")
    {
        errorText_city = "* You need to enter your city";
        isValid_city = false;
        
    }
    
    if (!isValid_city)
    {
        document.getElementById("error").innerHTML = errorText_city;
        return false;
    }
    
    if (form.province.value == "")
    {
        errorText_province = "* You need to enter your province";
        isValid_province = false;
        
    }
    
    if (!isValid_province)
    {
        document.getElementById("error").innerHTML = errorText_province;
        return false;
    }
    
    if (form.location.value == "")
    {
        errorText_location = "* You need to enter your preferred location";
        isValid_location = false;
        
    }
 
    if (!isValid_location)
    {
        document.getElementById("error2").innerHTML = errorText_location;
        return false;
    }
    
    if (form.testdate.value == "")
    {
        errorText_testdate = "* You need to enter your preferred test date";
        isValid_testdate = false;
        
    }
 
    if (!isValid_testdate)
    {
        document.getElementById("error2").innerHTML = errorText_testdate;
        return false;
    }
    
    if (form.price.value == "")
    {
        errorText_price = "* You need to select a price";
        isValid_price = false;
        
    }
 
    if (!isValid_price)
    {
        document.getElementById("error3").innerHTML = errorText_price;
        return false;
    }
    
    if (form.paymethod.value == "")
    {
        errorText_paymethod = "* You need to select a payment method";
        isValid_paymethod = false;
        
    }
 
    if (!isValid_paymethod)
    {
        document.getElementById("error3").innerHTML = errorText_paymethod;
        return false;
    }
    
    if (form.cardnum.value == "")
    {
        errorText_cardnum = "* You need to enter your card number";
        isValid_cardnum = false;
        
    }
 
    if (!isValid_cardnum)
    {
        document.getElementById("error3").innerHTML = errorText_cardnum;
        return false;
    }
    
    if (form.cvv.value == "")
    {
        errorText_cvv = "* You need to enter your CVV";
        isValid_cvv = false;
        
    }
 
    if (!isValid_cvv)
    {
        document.getElementById("error3").innerHTML = errorText_cvv;
        return false;
    }
    
    if (form.cardname.value == "")
    {
        errorText_cardname = "* You need to enter the name on your card";
        isValid_cardname = false;
        
    }
 
    if (!isValid_cardname)
    {
        document.getElementById("error3").innerHTML = errorText_cardname;
        return false;
    }
    
    return true;
   
    
    
    
}