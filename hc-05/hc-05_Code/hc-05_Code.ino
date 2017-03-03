int lp = 3;//left motor positive
int ln = 4;//left motor negative
int rp = 5;//right motor positive
int rn = 6;//right motor negative
void setup()
{
  Serial.begin(9600);
  
  pinMode(lp,OUTPUT);
  pinMode(rp,OUTPUT);
  pinMode(ln,OUTPUT);
  pinMode(rn,OUTPUT);
}
void loop()
{
 if(Serial.available())
 {
   String value = Serial.readStringUntil('\n');
   Serial.println(value);
   if(value == "f")
   {
     digitalWrite(lp,HIGH);
     digitalWrite(rp,HIGH);
     digitalWrite(ln,LOW);
     digitalWrite(rn,LOW);
   }
   else if(value == "b")
   {
     digitalWrite(lp,LOW);
     digitalWrite(rp,LOW);
     digitalWrite(ln,HIGH);
     digitalWrite(rn,HIGH);
   }
   else if(value == "r")
   {
     digitalWrite(lp,HIGH);
     digitalWrite(rp,LOW);
     digitalWrite(ln,LOW);
     digitalWrite(rn,LOW);
   }
   else if(value == "l")
   {
     digitalWrite(lp,LOW);
     digitalWrite(rp,HIGH);
     digitalWrite(ln,LOW);
     digitalWrite(rn,LOW);
   }
   else if(value == "s")
   {
     digitalWrite(lp,LOW);
     digitalWrite(rp,LOW);
     digitalWrite(ln,LOW);
     digitalWrite(rn,LOW);
   }
   
 }
}

