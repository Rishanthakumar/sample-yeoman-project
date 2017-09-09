package controllers;

import enumeration.ErrorCodeDescription;
import enumeration.ResponseStatusType;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Results;
import wrapper.ErrorResponseWrapper;
import wrapper.ResponseWrapper;

/**
 * Abstract Class representing an Base Controller.
 */
public abstract class BaseController extends Controller {

    Result success(String message, Object responseObject) {
        return jsonResponse(getWrappedResponse(OK, new ResponseWrapper<Object>(ResponseStatusType.SUCCESS, message, responseObject)));
    }

    Result customNotFound(ErrorCodeDescription errorCode, String message) {
        return jsonResponse(getWrappedResponse(NOT_FOUND, new ErrorResponseWrapper<Object>(errorCode, ResponseStatusType.ERROR, message, null)));
    }

    Result customBadRequest(ErrorCodeDescription errorCode, String message) {
        return jsonResponse(getWrappedResponse(BAD_REQUEST, new ErrorResponseWrapper<Object>(errorCode, ResponseStatusType.ERROR, message, null)));
    }

   private Result getWrappedResponse(int status, ResponseWrapper responseWrapper) {
        return Results.status(status, Json.toJson(responseWrapper));
    }

    private Result jsonResponse(Result result) {
        return result.as("application/json; charset=utf-8");
    }
}
