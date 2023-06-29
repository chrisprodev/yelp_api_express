import { NextFunction, Request, Response } from "express";
import axios from "axios";

const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const options = {
      method: "GET",
      url: "https://api.yelp.com/v3/categories",
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        accept: "application/json",
      },
    };

    const { data } = await axios.request(options);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const getRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const category = req.params.category;
  const page = Number(req.params.page);

  try {
    const options = {
      method: "GET",
      url: "https://api.yelp.com/v3/businesses/search",
      params: {
        location: "San Jose, CA95127",
        term: "restaurants",
        limit: 15,
        categories: category,
        offset: (page - 1) * 15,
      },
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    };

    const { data } = await axios.request(options);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export { getCategories, getRestaurants };
