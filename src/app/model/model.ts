import { Injectable } from '@angular/core';
import { Project } from '../component/detail/detail';

@Injectable()
export class Model {

    project:Array<Project> = new Array<Project>()
    setProject(){
        this.project = []
        this.project.push(new Project())
        this.project[0].site = 'ADVANCED INFO SERVICE (AIS)'
        this.project[0].name = 'EBUSINESS PORTAL'
        this.project[0].desc = 'AIS eBusiness Portal Service or Computer System designed for the convenience of Subscriber to perform electronic transactions in connection with the use of Mobile Phone Service including any related services such as to check the promotion package, to register-change-cancel the use of Mobile Phone Service to inform the desire to purchase the Goods/Service, to browse the usage detail record of the Mobile Phone Service etc.'
        this.project[0].time = 'JUNE 2017 – AUG 2017 , NOV 2017 – SEP 2018'
        this.project[0].url = '../../../assets/img/product/ebiz.png'
        this.project.push(new Project())
        this.project[1].site = 'KRUNGTHAI BANK (KTB)'
        this.project[1].name = 'CASH MENAGEMENT ADMIN PORTAL'
        this.project[1].desc = 'Migration  KTB	Cash Management	Admin Portal Website. The project also aims to improve and enhance the system	using new Java technology and framework.'
        this.project[1].time = 'SEP	2017 – OCT 2017'
        this.project[1].url = '../../../assets/img/product/portaladmin.png'
        this.project.push(new Project())
        this.project[2].site = 'ADVANCED INFO SERVICE (AIS)'
        this.project[2].name = 'ALLOWANCE SYSTEM'
        this.project[2].desc = 'AIS Allowance System is AIS Internal Website for employee to show reports provide data to determine daily allowances for employee. The report contain information on actual overtime. The details about when overtime applies are different under each condition and agreement. To find out when overtime applies in your see When overtime applies.'
        this.project[2].time = 'MAY 2018 – SEP	2018'
        this.project[2].url = '../../../assets/img/product/allw.jpg'
        this.project.push(new Project())
        this.project[3].site = 'KRUNGTHAI BANK (KTB)'
        this.project[3].name = 'KRUNGTHAI BAIBOON'
        this.project[3].desc = 'KrungThai Baiboon is a QR Code service to help facilitate and increase security for Customers and the public to donate money through the Mobile Application from all banks and submit donation information. To the Revenue Department for tax deductions'
        this.project[3].time = 'SEP 2018 – DEC 2018'
        this.project[3].url = '../../../assets/img/product/bb.png'
        this.project.push(new Project())
        this.project[4].site = 'KRUNGTHAI BANK (KTB)'
        this.project[4].name = 'VAT	CASHBACK REGISTRATION'
        this.project[4].desc = 'Registration system In the project to promote payment To buy products and services and to submit VAT information via electronic systems in the name of Go Cashless Get Cash Back. Reduce cash, receive cash back Promote social spending without cash During the Chinese New Year festival 2019'
        this.project[4].time = 'DEC 2018 – JAN 2018'
        this.project[4].url = '../../../assets/img/product/regis.png'
        this.project.push(new Project())
        this.project[5].site = 'KRUNGTHAI BANK (KTB)'
        this.project[5].name = 'BOOKING COIN'
        this.project[5].desc = 'On the occasion of the coronation ceremony on May 4th 2019, the Treasury Department made commemorative mint, commemorative coins and commemoration medal for public to order to keep as a memorial in honor of King Rama 10.'
        this.project[5].time = 'FEB 2018 – MAR 2018'
        this.project[5].url = '../../../assets/img/product/booking-coin.png'
        this.project.push(new Project())
        this.project[6].site = 'SECONDARY CITIES'
        this.project[6].name = 'EFILING'
        this.project[6].desc = 'Government measures to promote tourism in minor cities and stimulate the economy. In which money will be distributed to people aged 18 years and over; 1,500 baht each, to spend in 55 minor cities to buy products and services via e-Payment methods.'
        this.project[6].time = 'MAR 2018 – MAR 2018'
        this.project[6].url = '../../../assets/img/product/travel-ktb.png'
        this.project.push(new Project())
        this.project[7].site = 'KRUNGTHAI BANK (KTB)'
        this.project[7].name = 'EFILING'
        this.project[7].desc = 'Electronic complaint filing system Payment of various fees Is used via internet banking On the branch counters and ATMs of Krung Thai Bank For lawyers'
        this.project[7].time = 'MAR 2018 – JULY 2018'
        this.project[7].url = '../../../assets/img/product/eFiling.png'
        this.project.push(new Project())
        this.project[8].site = 'KRUNGTHAI BANK (KTB)'
        this.project[8].name = 'ECOURT'
        this.project[8].desc = 'Filing submission of pleadings and documents by electronic media For officers and judges '
        this.project[8].time = 'MAR 2018 – JULY 2018'
        this.project[8].url = '../../../assets/img/product/eCourt.png'
        this.project.push(new Project())
        this.project[9].site = 'TISCO BANK (TISCO)'
        this.project[9].name = 'ZERO CANZER PLAN'
        this.project[9].desc = 'Insurance form provides for use comprehensive details what is usually contained in an Insurance Policy.'
        this.project[9].time = 'JULY 2018 – JULY 2018'
        this.project[9].url = '../../../assets/img/product/zeroCanzer.png'
        this.project.push(new Project())
        this.project[10].site = 'FREELANCE'
        this.project[10].name = 'GREEN SPOT'
        this.project[10].desc = 'Green spot company website is so much more than just a comprehensive internship search engine. This site allows you to search for opportunities by major, job category, preferred resources as well.'
        this.project[10].time = 'OCTOBER 2018 – OCTOBER 2018'
        this.project[10].url = '../../../assets/img/product/greenSpot.png'
        this.project.push(new Project())
        this.project[11].site = 'TISCO BANK (TISCO)'
        this.project[11].name = 'CHATBOT PLATFORM'
        this.project[11].desc = 'Chatbot applications streamline interactions between people and services, enhancing customer experience. At the same time, they offer companies new opportunities to improve the customers engagement process and operational efficiency by reducing the typical cost of customer service.'
        this.project[11].time = 'AUGUST 2018 – JANURY 2020'
        this.project[11].url = '../../../assets/img/product/placeholder-img.png'
        this.project.push(new Project())
        this.project[12].site = 'FREELANCE'
        this.project[12].name = 'THAI NAMTHIP'
        this.project[12].desc = 'Coca Cola <a target="_blank" href="http://www.thainamthip.co.th/customer/fooddelivery/pages/main"> http://www.thainamthip.co.th/customer/fooddelivery/pages/main </a>'
        this.project[12].time = 'OCTOBER 2019 - OCTOBER 2019 '
        this.project[12].url = '../../../assets/img/product/thainamtip.png'
        this.project.push(new Project())
        this.project[13].site = 'TISCO BANK (TISCO)'
        this.project[13].name = 'COMPOSER ENGINE'
        this.project[13].desc = 'Composer is an application developed for users to create Microservice-based systems (MBS) by selecting a data structure Assembled with a template and a predetermined widget, users can review and adjust their usage. Once satisfied, they are stored on the EC2 by setting the MBS operating sequence, and the Composer also determines the access and usage rights of each MBS.'
        this.project[13].time = 'FEBRUARY 2020 - Present'
        this.project[13].url = '../../../assets/img/product/placeholder-img.png'
        this.project.push(new Project())
        this.project[14].site = 'TISCO BANK (TISCO)'
        this.project[14].name = 'LAUNCHER ENGINE'
        this.project[14].desc = 'Application showing the operation of MBS which is both Service and Standard Process by configuring and generating from Composer Application.'
        this.project[14].time = 'FEBRUARY 2020 - Present'
        this.project[14].url = '../../../assets/img/product/placeholder-img.png'
        this.project.push(new Project())
        this.project[15].site = 'TISCO BANK (TISCO)'
        this.project[15].name = 'IT-CATALOG'
        this.project[15].desc = 'IT Catalog is an application used to collect Application IT within the Tisco organization. Each application has detailed information. Example screenshot Developer information Released version and can also allow users to rate and write comments on the Application. There is also a useful Article for studying information.'
        this.project[15].time = 'MARCH 2021 - Present'
        this.project[15].url = '../../../assets/img/product/placeholder-img.png'
    }
}