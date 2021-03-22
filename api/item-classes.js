class Item
{
	constructor(id, name, description, quantity)
	{
		this.id 		 = id;
		this.name 		 = name;
		this.description = description;
		this.quantity    = quantity;
	}
}

class Merchandise extends Item
{
	constructor(id, name, description, quantity, price)
	{
		super(id, name, description, quantity);
		
		this.price = price;
	}
}

class Part extends Item
{
	constructor(id, name, description, quantity, siteLocation)
	{
		super(id, name, description, quantity);
		
		this.siteLocation = siteLocation;
	}
	
}

class Motorcycle extends Merchandise
{
	constructor(id, name, description, quantity, price, make, model, year)
	{
		super(id, name, description, quantity, price);
		
		this.make  = make;
		this.model = model;
		this.year  = year;
	}
}

module.exports = Merchandise, Part, Motorcycle;
