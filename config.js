const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254711645930";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_14_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDk2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDczLFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5LFxuICAgICAgICA4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMHdSWE5wcGFKRXpQdmNsUGZ0MW1iYVArQXc1cDNtb3NSV2w3c1U2eFA5Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSFNtRjZVTXhTYS1FY2xoNkhPdl90d1wiLFxuICBcInBob25lSWRcIjogXCJmOTVlMzJlNC04YWU3LTQ3YjItOTEzMy1mN2E1ZTM4OTg1YTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAyNDAsXG4gICAgICA1NCxcbiAgICAgIDE1MyxcbiAgICAgIDI1NSxcbiAgICAgIDEzNixcbiAgICAgIDE0MixcbiAgICAgIDE5MCxcbiAgICAgIDE3MixcbiAgICAgIDExNCxcbiAgICAgIDI1MixcbiAgICAgIDcxLFxuICAgICAgMTMsXG4gICAgICA1MyxcbiAgICAgIDI0NCxcbiAgICAgIDE5NixcbiAgICAgIDcwLFxuICAgICAgNjIsXG4gICAgICAyLFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgODIsXG4gICAgICAxMTcsXG4gICAgICAxMDQsXG4gICAgICAyMDYsXG4gICAgICAxODcsXG4gICAgICAxMTIsXG4gICAgICAyMjEsXG4gICAgICA3LFxuICAgICAgNDMsXG4gICAgICAyMDAsXG4gICAgICAyNDQsXG4gICAgICAyMzAsXG4gICAgICA3OSxcbiAgICAgIDg0LFxuICAgICAgNzEsXG4gICAgICAyMDIsXG4gICAgICAzMixcbiAgICAgIDEwNSxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4RjFTNEhMWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzExNjQ1OTMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZGz8J2SmvCdkorwnZKP8J2SiC4uLlwiLFxuICAgIFwibGlkXCI6IFwiMzg2MjkzMzg1NjY4NDU6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZlZpWEVRNHNqRnRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRsR1cwUitJcGIvMWN1Mks3Vm95eDJQUEdoSnNtMk83czZVb3VvR3JyRjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaEliQ1ptLzQzSlFZcnE0ZWJnU21UWTFEbko1WnROUHQyRlhaa000SDc5NVVBRUh4VXJRcURiNTNSRXhxYVdYWWdkeElxTmY3N252dlFRZkpSN1F2QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR2x2dHpraGR5UXVqRW0vRWhwSlhwK2FGK3M5U0plNzBaMk1HR014WkRBc0lVdDhSeWJCcDR1WDQ3ZzNsVEZDbGZoTXcvTHV5YnFoaWxCejN4cERtaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzExNjQ1OTMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODA0NDU0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
