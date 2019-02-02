class User
{
  constructor()
  {
    let cozy = 0;
    let music = 0;
    let dancing = 0;
    let craft = 0;
    let cheap = 0;
    let dist = 0;
    let fineDine = 0;
    let seaFood = 0;
    let traditional = 0;
    let vegetarian = 0;
  }

  addCozy(i)
  {
     cozy += i;
     if(cozy > 10)
     {
       cozy = 10;
     }
     if(cozy < 0)
     {
       cozy = 0;
     }
  }
  addMusic(i)
  {
     music += i;
     if(music > 10)
     {
       music = 10;
     }
     if(music < 0)
     {
       music = 0;
     }
   }
  addDancing(i)
  {
     dancing += i;
     if(dancing > 10)
     {
       dancing = 10;
     }
     if(dancing < 0)
     {
       dancing = 0;
     }
   }
  addCraft(i)
  {
    craft += i;
    if(craft > 10)
    {
      craft = 10;
    }
    if(craft < 0)
    {
      craft = 0;
    }
 }
  addCheap(i)
  {
 cheap += i;
 if(cheap > 10)
 {
   cheap = 10;
 }
 if(cheap < 0)
 {
   cheap = 0;
 }
 }
  addFineDine(i)
  {
    fineDine += i;
    if(fineDine > 10)
    {
      fineDine = 10;
    }
    if(fineDine < 0)
    {
      fineDine = 0;
    }
 }
  addSeaFood(i)
  {
  seaFood += i;
  if(seaFood > 10)
  {
    seaFood = 10;
  }
  if(seaFood < 0)
  {
    seaFood = 0;
  }
  }
  addTraditional(i)
  {
   traditional += i;
   if(traditional > 10)
   {
     traditional = 10;
   }
   if(traditional < 0)
   {
     traditional = 0;
   }
}
  addVegetarian(i)
  {
 vegetarian += i;
 if(vegetarian > 10)
 {
   vegetarian = 10;
 }
 if(vegetarian < 0)
 {
   vegetarian = 0;
 }
}
  getCozy()
  {
    return cozy;
  }
  getMusic()
  {
    return music;
  }
  getDancing()
  {
    return dancing;
  }
  getCraft()
  {
    return craft;
  }
  getCheap()
  {
    return cheap;
  }
  getFineDine()
  {
    return fineDine;
  }
  getSeaFood()
  {
    return seaFood;
  }
  getTraditional()
  {
    return traditional;
  }
  getVegetarian()
  {
    return vegetarian;
  }


}
