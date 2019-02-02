class bar
{
  constructor()
  {
    let cozy = 0;
    let music = 0;
    let dancing = 0;
    let craft = 0;
    let cheap = 0;
    let dist = 0;
    let name = "";
  }

  setName(s)
  {
    name = s;
  }
  setCozy(i)
  {
    cozy += i;
  }
  setMusic(i)
  {
    music += i;
  }
  setDancing(i)
  {
    dancing += i;
  }
  setCraft(i)
  {
    craft += i;
  }
  setCheap(i)
  {
    cheap += i;
  }
  getDist(user)
  {
    dist += math.abs(cozy - user.getCozy());
    dist += math.abs(music - user.getMusic());
    dist += math.abs(dancing - user.getDancing());
    dist += math.abs(craft - user.getCraft());
    dist += math.abs(cheap - user.getCheap());
  }
}
