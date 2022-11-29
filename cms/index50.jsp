<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="asapro" uri="http://www.asadal.com" %>

<c:import url="/WEB-INF/jsp/egovframework/com/asapro/admin/layout/header.jsp" charEncoding="UTF-8" />
<c:if test="${boardConfig.bcType ne 'qna' && boardConfig.bcType ne 'faq' && !fn:startsWith(boardArticleForm.memId, 'member_') && !fn:startsWith(boardArticleForm.memId, 'guest_')}">
<script src="${CONTEXT_PATH }/assets/ckeditor/ckeditor4/ckeditor.js"></script>
</c:if>
<script src="${CONTEXT_PATH }/assets/plugins/jquery-timepicker/jquery.timepicker.min.js"></script>
<link rel="stylesheet" href="${CONTEXT_PATH }/assets/plugins/jquery-timepicker/jquery.timepicker.min.css">
<script>
jQuery(function($){
	
	//공지종료일 노출
	$('#baNotice1').on('click', function(){
		if($(this).is(':checked') == true ){
			$('.baNoticeEndDate').show();
		}else{
			$('.baNoticeEndDate').hide();
			$('input[name=baNoticeEndDate]').val('');
		}
	});
	
	
	//공통게시 카테고리선택 노출
	<c:if test="${!boardArticleForm.baCommSelec }">
		$('#baComSelCat').hide();
	</c:if>
	$('#baCommSelec1').on('click', function(){
		if($(this).is(':checked') == true ){
			$('#baComSelCat').show();
		}else{
			$('#baComSelCat').hide();
			$('#baComSelCat').val('');
		}
	});
	
	//비밀글 비밀번호 노출
	$('#baSecret1').on('click', function(){
		if($(this).is(':checked') == true ){
			$('.baSecretPassword').show();
		}else{
			$('.baSecretPassword').hide();
			$('#baSecretPassword').val('');
		}
	});
	
	//달력
	$('.datepicker-ui').datepicker();
	
	//첨부파일
	//------------------------------------------
	//------------------------- 첨부파일 등록 Start
	//-------------------------------------------
	<c:if test="${boardConfig.bcUploadFileNum > 0}">
	$('.selectFile').multiSelector({
		list_target: 'fileList'
		,fileItemCssSelector: 'file_add'
		,list_delete_fileid: 'deleteFileList'
		,max: ${boardConfig.bcUploadFileNum}
	});
	</c:if>
	//------------------------- 첨부파일 등록 End


	//시간
	$(document).on('focus','.startTime', function() {
		$(this).timepicker({
			timeFormat: 'HH:mm',
			interval: 60,
			minTime: '0',
			maxTime: '23:00',
			//defaultTime: '11',
			startTime: '00:00',
			dynamic: false,
			dropdown: true,
			scrollbar: true
		});
	});
	
	//입력값확인
	$('#saveBtn').on('click', function(e){
		e.preventDefault();
		<c:if test="${boardConfig.bcType ne 'qna' && boardConfig.bcType ne 'faq' && !fn:startsWith(boardArticleForm.memId, 'member_') && !fn:startsWith(boardArticleForm.memId, 'guest_')}">
		CKEDITOR.instances['baContentHtml'].updateElement();
		</c:if>
		
		var params = new FormData($('#boardArticleForm')[0]);
    	//alert(params);
       	$.ajax({
			url : '${ADMIN_PATH }/board/article/validation.do'
			, type : 'post'
			, dataType: 'json'
			, data: params
			, contentType : false
			, processData : false
		}).done(function(result){
			if(result.success){
				$('#boardArticleForm').submit();
			} else {
				swal({
	                type: 'error',
	                title: '입력값 확인',
	                html: result.text
	            });
				var classText = $('#' + result.resultCode).attr('class') + ' is-invalid';
				$('#' + result.resultCode).attr('class', classText);
				$('#' + result.resultCode).focus();
			}
		}).fail(function(result){
			swal({
                type: 'error',
                title: '입력값 확인 에러.[fail]'
            });
		});
	});
	
	
});
</script>

	<!-- Left Sidebar -->	
	<c:import url="/WEB-INF/jsp/egovframework/com/asapro/admin/layout/left.jsp" charEncoding="UTF-8" />
	
	<!-- Start right Content here -->
	<div class="content-page">
	    <!-- Start content -->
	    <div class="content">
			
			<!-- Top Bar -->
			<c:import url="/WEB-INF/jsp/egovframework/com/asapro/admin/layout/top.jsp" charEncoding="UTF-8" />
			
	        <div class="page-content-wrapper ">

				<div class="container-fluid">
			
					<!-- location -->
					<c:import url="/WEB-INF/jsp/egovframework/com/asapro/admin/include/location.jsp" charEncoding="UTF-8" />

					
					<!-- ============================= 메뉴별 컨텐츠 ============================ -->
					<!-- 입력폼 -->
					<div class="row">
					    <div class="col-sm-12">
					        <div class="card m-b-15">
					        	<div class="card-header">
									<h4 class="mt-0 header-title">${boardConfig.bcName }
										<c:if test="${formMode == 'INSERT'}">- 글등록</c:if>
										<c:if test="${formMode == 'UPDATE'}">- 글수정</c:if>
									</h4>
								</div>
					        
					            <div class="card-body">
					            
									<!-- alert maeeage -->
									<c:import url="/WEB-INF/jsp/egovframework/com/asapro/admin/include/message.jsp" charEncoding="UTF-8" />
									
					            	<c:if test="${formMode == 'INSERT'}"><c:set var="actionUrl" value="${ADMIN_PATH}/board/article/insert.do" /></c:if>
									<c:if test="${formMode == 'UPDATE'}"><c:set var="actionUrl" value="${ADMIN_PATH}/board/article/update.do" /></c:if>
						            <form:form modelAttribute="boardArticleForm" cssClass="" action="${actionUrl}?cp=${backListSearch.cp}${backListSearch.queryString}" method="post" enctype="multipart/form-data">
										<div class="form-group row">
											<form:label path="baTitle" cssClass="col-sm-2 col-form-label">구분 <span class="text-danger">*</span></form:label>
											<div class="col-sm">
												<div class="col-form-label">
													<div class="custom-control custom-radio custom-control-inline">
														<input id="divisionModify1" name="divisionModify" class="custom-control-input" type="radio" value="1">
														<label for="divisionModify1" class="custom-control-label">한국벤처투자</label>
													</div>
													<div class="custom-control custom-radio custom-control-inline">
														<input id="divisionModify2" name="divisionModify" class="custom-control-input" type="radio" value="2">
														<label for="divisionModify2" class="custom-control-label">한국벤처캐피탈협회</label>
													</div>
													<div class="custom-control custom-radio custom-control-inline">
														<input id="divisionModify3" name="divisionModify" class="custom-control-input" type="radio" value="3" checked="checked">
														<label for="divisionModify3" class="custom-control-label">엔젤협회</label>
													</div>
													<div class="custom-control custom-radio custom-control-inline">
														<input id="divisionModify4" name="divisionModify" class="custom-control-input" type="radio" value="4">
														<label for="divisionModify4" class="custom-control-label">창업진흥원</label>
													</div>
												</div>
											</div>
										</div>
										<div class="form-group row">
											<form:label path="baTitle" cssClass="col-sm-2 col-form-label">제목 <span class="text-danger">*</span></form:label>
											<div class="col-sm">
												<form:input path="baTitle" cssClass="form-control col-sm-8" cssErrorClass="form-control col-sm-8 is-invalid" htmlEscape="false" />
												<form:errors path="baTitle" element="div" cssClass="text-danger col-form-label ml-2" />
											</div>
										</div>
										<div class="form-group row">
											<div class="col-sm">
												<span>작성자  |   </span>
												<span>2021-10-21   |      </span>
												<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye mr-1" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg> 129</span>
											</div>
										</div>
										
										<!-- 사용자 정의 필드 출력 -->
										<div class="form-group row">
											<form:label path="baContentHtml" cssClass="col-sm-2 col-form-label">상세내용</form:label>
											<div class="col-sm">
												<form:textarea path="baContentHtml" cssClass="form-control col-sm-8" cssErrorClass="form-control col-sm-8 is-invalid" rows="16" placeholder="상세내용" htmlEscape="false" />
												<form:errors path="baContentHtml" element="div" cssClass="text-danger" />
											</div>
										</div>

										<div class="form-group row">
											<form:label path="baContentHtml" cssClass="col-sm-2 col-form-label">답변</form:label>
											<div class="col-sm">
												<form:textarea path="baContentHtml" cssClass="form-control col-sm-8" cssErrorClass="form-control col-sm-8 is-invalid" rows="16" placeholder="답변내용" htmlEscape="false" />
												<form:errors path="baContentHtml" element="div" cssClass="text-danger" />
											</div>
										</div>
										
										<!-- <%-- 첨부된 파일 --%> -->
										<c:if test="${boardConfig.bcUploadFileNum > 0}">
											<div class="form-group row">
												<label for="baMultipartFiles" id="file_label" class="col-sm-2 col-form-label">첨부파일 </label>
												<div class="col-sm">
													<input type="file" name="baMultipartFiles[0]" id="baMultipartFiles0" class="selectFile col-form-label"/>
													<form:errors path="baMultipartFiles" element="div" cssClass="text-danger col-form-label ml-2" />
													<span class="bg-light font-weight-bold text-info">- 파일첨부는 총${boardConfig.bcUploadFileNum}개까지 가능합니다.(파일당${boardConfig.bcUploadSizeMax}MB제한)</span>
													<div class="mt-2" id="fileList">
														<c:forEach items="${boardArticleForm.baFileInfos}" var="baFileInfo" varStatus="vs">
															<div class="file_add">
																<span><a href="${APP_PATH}/file/download/uu/${baFileInfo.fileUUID}" title="<c:out value="${fileItem.fileOriginalName}" escapeXml="true" />">${baFileInfo.fileOriginalName}(${baFileInfo.fileSizeString})<i class="mdi mdi-download text-warning"></i></a></span>
																<i class="deleteBtn ml-2 fa fa-times text-danger" style="cursor: pointer;" data-fileid="${baFileInfo.fileId}"></i>
															</div>
														</c:forEach>
													</div>
													<div id="deleteFileList"></div>
													
													<c:if test="${not empty fileInfoUploadResult}">
													<div class="text-danger">
														<div>게시물은 정상적으로 등록되었으나 다음의 파일을 업로드 하지 못하였습니다.</div>
														<ul>
															<c:forEach items="${fileInfoUploadResult.notUploadableFiles}" var="item"><li>${item} 파일이 업로드 금지파일(업로드 금지확장자)에 해당합니다.</li></c:forEach>
															<c:forEach items="${fileInfoUploadResult.uploadSizeOverFiles}" var="item"><li>${item} 파일이 업로드 파일사이즈를 초과하였습니다.</li></c:forEach>
															<c:forEach items="${fileInfoUploadResult.altTextMissingFiles}" var="item"><li>${item} 파일의 대체텍스트가 누락되었습니다.</li></c:forEach>
														</ul>
													</div>
													</c:if>
												</div>
											</div>
										</c:if>
										
										<hr>
										<c:if test="${not empty boardConfig.bcStatusCode}">
											<div class="form-group row">
												<form:label path="baStatus" cssClass="col-sm-2 col-form-label">진행상태 <span class="text-danger">*</span></form:label>
												<div class="col-sm">
													<form:select path="baStatus" cssClass="form-control col-sm-2" cssErrorClass="form-control col-sm-2 is-invalid" >
														<form:option value="">선택</form:option>
														<form:options items="${bcStatusCodeList}" itemLabel="codeName" itemValue="codeId" />
													</form:select>
													<form:errors path="baStatus" element="div" cssClass="text-danger col-form-label ml-2" />
												</div>
											</div>
										</c:if>
										
										<c:if test="${boardConfig.bcSupportAnswer and formMode eq 'UPDATE'}">
											<div class="form-group row">
												<form:label path="baCmptDate" cssClass="col-sm-2 col-form-label">완료일</form:label>
												<div class="col-sm form-inline">
													<form:input path="baCmptDate" cssClass="form-control mr-sm-2 datepicker-ui" cssErrorClass="form-control mr-sm-2 datepicker-ui is-invalid" autocomplete="off"/>
													<form:errors path="baCmptDate" element="div" cssClass="text-danger col-form-label ml-2" />
												</div>
											</div>
											<div class="form-group row">
												<form:label path="baAnswer" cssClass="col-sm-2 col-form-label">답글 </form:label>
												<div class="col-sm">
													<form:textarea path="baAnswer" cssClass="form-control col-sm-8" rows="8" placeholder="답글" />
													<form:errors path="baAnswer" element="div" cssClass="text-danger" />
												</div>
											</div>
										</c:if>
										
										<div class="form-group">
											<button type="button" class="btn btn-primary waves-effect waves-light" id="saveBtn">저장</button>
											<a href="" class="btn btn-secondary waves-effect m-l-5">목록</a>
										</div>
									</form:form>
					            </div>
					        </div>
					    </div>
					</div>
					<!-- //입력폼 -->
					
					<!-- ============================= //메뉴별 컨텐츠 ============================ -->
		
		
		    </div><!-- container -->
			
			
			</div> <!-- Page content Wrapper -->
	
	    </div> <!-- content -->
	
	</div>
	<!-- End Right content here -->
										
<script>
//CKEDITOR
<c:if test="${boardConfig.bcType ne 'qna' && boardConfig.bcType ne 'faq' && !fn:startsWith(boardArticleForm.memId, 'member_') && !fn:startsWith(boardArticleForm.memId, 'guest_')}">
	CKEDITOR.replace( 'baContentHtml',{
	//filebrowserImageUploadUrl : GLOBAL.ADMIN_PATH + '/file/editor/upload.do?module=board&moduleId=${boardArticleForm.bcId}&moduleSub=article&moduleSubId=${boardArticleForm.baId}'
} );
	
</c:if>
CKEDITOR.replace( 'baContentHtml2',{
	
} );
</script>


<c:import url="/WEB-INF/jsp/egovframework/com/asapro/admin/layout/footer.jsp" charEncoding="UTF-8" />