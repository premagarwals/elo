

function rating()
{
   elo1 = 1000
   if (document.form0.d1in.value=='f6' &&
       document.form0.d1fi.value=='f3' ) { elo1=2600 }
   if (document.form0.d1in.value=='c5' &&
       document.form0.d1fi.value=='d4' ) { elo1=1900 }
   if (document.form0.d1in.value=='c6' &&
       document.form0.d1fi.value=='d4' ) { elo1=1900 }
   if (document.form0.d1in.value=='b4' &&
       document.form0.d1fi.value=='c3' ) { elo1=1400 }
   if (document.form0.d1in.value=='c8' &&
       document.form0.d1fi.value=='a6' ) { elo1=1500 }
   if (document.form0.d1in.value=='f6' &&
       document.form0.d1fi.value=='g6' ) { elo1=1400 }
   if (document.form0.d1in.value=='e6' &&
       document.form0.d1fi.value=='e5' ) { elo1=1200 }
   if (document.form0.d1in.value=='c8' &&
       document.form0.d1fi.value=='d7' ) { elo1=1600 }

   elo2 = 1000
   if (document.form0.d2in.value=='g2' &&
       document.form0.d2fi.value=='e4' ) { elo2=2600 }
   if (document.form0.d2in.value=='g5' &&
       document.form0.d2fi.value=='h7' ) { elo2=1950 }
   if (document.form0.d2in.value=='h5' &&
       document.form0.d2fi.value=='g6' ) { elo2=1900 }
   if (document.form0.d2in.value=='g2' &&
       document.form0.d2fi.value=='f1' ) { elo2=1400 }
   if (document.form0.d2in.value=='g2' &&
       document.form0.d2fi.value=='d5' ) { elo2=1200 }
   if (document.form0.d2in.value=='f2' &&
       document.form0.d2fi.value=='f4' ) { elo2=1400 }

   elo3 = 1000
   if (document.form0.d3in.value=='c5' &&
       document.form0.d3fi.value=='c6' ) { elo3=2500 }
   if (document.form0.d3in.value=='g3' &&
       document.form0.d3fi.value=='g6' ) { elo3=2000 }
   if (document.form0.d3in.value=='e4' &&
       document.form0.d3fi.value=='e5' ) { elo3=1900 }
   if (document.form0.d3in.value=='g3' &&
       document.form0.d3fi.value=='g5' ) { elo3=1700 }
   if (document.form0.d3in.value=='e4' &&
       document.form0.d3fi.value=='d4' ) { elo3=1200 }
   if (document.form0.d3in.value=='d6' &&
       document.form0.d3fi.value=='e5' ) { elo3=1200 }

   elo4 = 1000
   if (document.form0.d4in.value=='e5' &&
       document.form0.d4fi.value=='e6' ) { elo4=2500 }
   if (document.form0.d4in.value=='b3' &&
       document.form0.d4fi.value=='f7' ) { elo4=1600 }
   if (document.form0.d4in.value=='b3' &&
       document.form0.d4fi.value=='c2' ) { elo4=1700 }
   if (document.form0.d4in.value=='b3' &&
       document.form0.d4fi.value=='d1' ) { elo4=1800 }

   elo5 = 1000
   if (document.form0.d5in.value=='e3' &&
       document.form0.d5fi.value=='c5' ) { elo5=2500 }
   if (document.form0.d5in.value=='f5' &&
       document.form0.d5fi.value=='h6' ) { elo5=2100 }
   if (document.form0.d5in.value=='e3' &&
       document.form0.d5fi.value=='h6' ) { elo5=1900 }
   if (document.form0.d5in.value=='f5' &&
       document.form0.d5fi.value=='g7' ) { elo5=1500 }
   if (document.form0.d5in.value=='f2' &&
       document.form0.d5fi.value=='g3' ) { elo5=1750 }
   if (document.form0.d5in.value=='c8' &&
       document.form0.d5fi.value=='f8' ) { elo5=1200 }
   if (document.form0.d5in.value=='f2' &&
       document.form0.d5fi.value=='h4' ) { elo5=1200 }
   if (document.form0.d5in.value=='e3' &&
       document.form0.d5fi.value=='b6' ) { elo5=1750 }
   if (document.form0.d5in.value=='e2' &&
       document.form0.d5fi.value=='c4' ) { elo5=1400 }
 

   elo6 = 1000
   if (document.form0.d6in.value=='g5' &&
       document.form0.d6fi.value=='f6' ) { elo6=2500 }
   if (document.form0.d6in.value=='c3' &&
       document.form0.d6fi.value=='d5' ) { elo6=1700 }
   if (document.form0.d6in.value=='c4' &&
       document.form0.d6fi.value=='b5' ) { elo6=1900 }
   if (document.form0.d6in.value=='f2' &&
       document.form0.d6fi.value=='f4' ) { elo6=1700 }
   if (document.form0.d6in.value=='a2' &&
       document.form0.d6fi.value=='a3' ) { elo6=1200 }
   if (document.form0.d6in.value=='e1' &&
       document.form0.d6fi.value=='e3' ) { elo6=1200 }

   elo7 = 1000
   if (document.form0.d7in.value=='f6' &&
       document.form0.d7fi.value=='h7' ) { elo7=2500 }
   if (document.form0.d7in.value=='f6' &&
       document.form0.d7fi.value=='e4' ) { elo7=1800 }
   if (document.form0.d7in.value=='g6' &&
       document.form0.d7fi.value=='g5' ) { elo7=1700 }
   if (document.form0.d7in.value=='a6' &&
       document.form0.d7fi.value=='a5' ) { elo7=1700 }
   if (document.form0.d7in.value=='g8' &&
       document.form0.d7fi.value=='h7' ) { elo7=1500 }

   elo8 = 1000
   if (document.form0.d8in.value=='b6' &&
       document.form0.d8fi.value=='d8' ) { elo8=2500 }
   if (document.form0.d8in.value=='c8' &&
       document.form0.d8fi.value=='e8' ) { elo8=1600 }
 
   elo9 = 1000
   if (document.form0.d9in.value=='e3' &&
       document.form0.d9fi.value=='d4' ) { elo9=2500 }
   if (document.form0.d9in.value=='e4' &&
       document.form0.d9fi.value=='g6' ) { elo9=1800 }
   if (document.form0.d9in.value=='e4' &&
       document.form0.d9fi.value=='h7' ) { elo9=1800 }
   if (document.form0.d9in.value=='e3' &&
       document.form0.d9fi.value=='h6' ) { elo9=1700 }
   if (document.form0.d9in.value=='d7' &&
       document.form0.d9fi.value=='b7' ) { elo9=1400 }

   elo10 = 1000
   if (document.form0.d10in.value=='d8' &&
       document.form0.d10fi.value=='d7' ) { elo9=2600 }
   if (document.form0.d10in.value=='f6' &&
       document.form0.d10fi.value=='e8' ) { elo9=2000 }
   if (document.form0.d10in.value=='h7' &&
       document.form0.d10fi.value=='h5' ) { elo9=1800 }
   if (document.form0.d10in.value=='c5' &&
       document.form0.d10fi.value=='d4' ) { elo9=1600 }
   if (document.form0.d10in.value=='c8' &&
       document.form0.d10fi.value=='a6' ) { elo9=1800 }
   if (document.form0.d10in.value=='a7' &&
       document.form0.d10fi.value=='a5' ) { elo9=1800 }
   if (document.form0.d10in.value=='f8' &&
       document.form0.d10fi.value=='e8' ) { elo9=1400 }
   if (document.form0.d10in.value=='d6' &&
       document.form0.d10fi.value=='d5' ) { elo9=1500 }


   document.form0.elo.value = (elo1+elo2+elo3+elo4+elo5+elo6+elo7+elo8+elo9+elo10)/10

}
