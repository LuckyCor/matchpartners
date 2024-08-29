package com.yupi.usercenter.common;

import lombok.Data;

import java.io.Serializable;

/**
 * 通用删除请求
 *
 */
@Data
public class DeleteRequest implements Serializable {

    private static final long serialVersionUID =-4162304142710323660L;

    private long id;
}
