class restaurant
{
  constructor()
  {
    let cozy = 0;
    let cheap = 0;
    let fineDine = 0;
    let seaFood = 0;
    let traditional = 0;
    let vegetarian = 0;
    let dist = 0;
    setCozy(i)
    {
      cozy += i;
    }
    setCheap(i)
    {
      cheap += i;
    }
    setFineDine(i)
    {
      fineDine += i;
    }
    setSeaFood(i)
    {
      seaFood += i;
    }
    setTraditional(i)
    {
      traditional += i;
    }
    setVegetarian(i)
    {
      vegetarian += i;
    }
    getDist(user)
    {
      dist += math.abs(cozy - user.getCozy());
      dist += math.abs(fineDine - user.getFineDine());
      dist += math.abs(seaFood - user.getSeaFood());
      dist += math.abs(traditional - user.getTraditional());
      dist += math.abs(vegetarian - user.getVegetarian());
    }
  }
}
