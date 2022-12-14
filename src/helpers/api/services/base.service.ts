import axios from "axios";
import { Resource } from "../types/resource.type";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const createService = <T extends Resource>(resource: T) => {
  const getResources = async (options: {} = {}) => {
    try {
      const opts = { ...options, method: "GET" };
      const res = await fetch(`${BASE_URL}/${resource.path}`, opts);
      const text = await res.text()
      return text ? JSON.parse(text) : undefined;
    } catch (error) {
      throw error;
    }
  };

  const getResource = async (resourceId: string, options: {} = {}) => {
    try {
      const opts = { ...options, method: "GET" };
      
      const res = await fetch(
        `${BASE_URL}/${resource.path}/${resourceId}`,
        opts
      );

      const text = await res.text()
      return text ? JSON.parse(text) : undefined;
    } catch (error) {
      throw error;
    }
  };

  const deleteResource = async (resourceId: string, options: {} = {}) => {
    try {
      const opts = { ...options, method: "DELETE" };
      const res = await fetch(
        `${BASE_URL}/${resource.path} /${resourceId}`,
        opts
      );
      return await res.json();
    } catch (error) {
      throw error;
    }
  };

  const updateResource = async (data: any, options: {} = {}) => {
    try {
      const opts = { ...options, method: "PUT", body: data };
      const res = await fetch(`${BASE_URL}/${resource.path} `, opts);
      return await res.json();
    } catch (error) {
      throw error;
    }
  };

  const createResource = async (data: any, options: {} = {}) => {
    try {
      const opts = { ...options, method: "POST", body: data };
      const res = await fetch(`${BASE_URL}/${resource.path} `, opts);
      return await res.json();
    } catch (error) {
      throw error;
    }
  };

  const queryResource = async (path: string, options: {} = {}) => {
    try {
      const opts = { ...options, method: "GET" };
      
      const res = await fetch(
        `${BASE_URL}/${resource.path}/${path}`,
        opts
      );

      const text = await res.text()
      return text ? JSON.parse(text) : undefined;
    } catch (error) {
      throw error;
    }
  };

  return {
    getResources,
    getResource,
    deleteResource,
    updateResource,
    createResource,
    queryResource,
  };
};
