package com.monitoring.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "ratings")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Ratings {

    public Ratings() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long tool_id;

    private Integer easy_configuration_wizard;
    private Integer gui_configuration;
    private Integer advance_reporting;
    private Integer enhanced_visualizations;
    private Integer custom_user_dashboards;
    private Integer custom_actions;
    private Integer notification_escalation;
    private Integer scheduled_reports;
    private Integer capacity_planning_reports;
    private Integer bulk_modification_tool;
    private Integer audit_logging;
    private Integer sla_reports;
    private Integer predictive_analysis;
    private Integer code_level_insights_transaction_tracing;
    private Integer end_user_experience_monitoring;
    private Integer aplication_framework_monitoring;
    private Integer real_user_monitoring;
    private Integer collect_correlate_custom_metrics;
    private Integer integration_with_third_party_tools;
    private Integer application_monitoring;
    private Integer integration_plugins;
    private Integer automation_performance_issue_remediation;

    public Integer getGui_configuration() {
        return this.gui_configuration;
    }

    public void setGui_configuration(Integer gui_configuration) {
        this.gui_configuration = gui_configuration;
    }

    public Integer getAdvance_reporting() {
        return this.advance_reporting;
    }

    public void setAdvance_reporting(Integer advance_reporting) {
        this.advance_reporting = advance_reporting;
    }

    public Integer getEnhanced_visualizations() {
        return this.enhanced_visualizations;
    }

    public void setEnhanced_visualizations(Integer enhanced_visualizations) {
        this.enhanced_visualizations = enhanced_visualizations;
    }

    public Integer getCustom_user_dashboards() {
        return this.custom_user_dashboards;
    }

    public void setCustom_user_dashboards(Integer custom_user_dashboards) {
        this.custom_user_dashboards = custom_user_dashboards;
    }

    public Integer getCustom_actions() {
        return this.custom_actions;
    }

    public void setCustom_actions(Integer custom_actions) {
        this.custom_actions = custom_actions;
    }

    public Integer getNotification_escalation() {
        return this.notification_escalation;
    }

    public void setNotification_escalation(Integer notification_escalation) {
        this.notification_escalation = notification_escalation;
    }

    public Integer getScheduled_reports() {
        return this.scheduled_reports;
    }

    public void setScheduled_reports(Integer scheduled_reports) {
        this.scheduled_reports = scheduled_reports;
    }

    public Integer getCapacity_planning_reports() {
        return this.capacity_planning_reports;
    }

    public void setCapacity_planning_reports(Integer capacity_planning_reports) {
        this.capacity_planning_reports = capacity_planning_reports;
    }

    public Integer getBulk_modification_tool() {
        return this.bulk_modification_tool;
    }

    public void setBulk_modification_tool(Integer bulk_modification_tool) {
        this.bulk_modification_tool = bulk_modification_tool;
    }

    public Integer getAudit_logging() {
        return this.audit_logging;
    }

    public void setAudit_logging(Integer audit_logging) {
        this.audit_logging = audit_logging;
    }

    public Integer getSla_reports() {
        return this.sla_reports;
    }

    public void setSla_reports(Integer sla_reports) {
        this.sla_reports = sla_reports;
    }

    public Integer getPredictive_analysis() {
        return this.predictive_analysis;
    }

    public void setPredictive_analysis(Integer predictive_analysis) {
        this.predictive_analysis = predictive_analysis;
    }

    public Integer getCode_level_insights_transaction_tracing() {
        return this.code_level_insights_transaction_tracing;
    }

    public void setCode_level_insights_transaction_tracing(Integer code_level_insights_transaction_tracing) {
        this.code_level_insights_transaction_tracing = code_level_insights_transaction_tracing;
    }

    public Integer getEnd_user_experience_monitoring() {
        return this.end_user_experience_monitoring;
    }

    public void setEnd_user_experience_monitoring(Integer end_user_experience_monitoring) {
        this.end_user_experience_monitoring = end_user_experience_monitoring;
    }

    public Integer getAplication_framework_monitoring() {
        return this.aplication_framework_monitoring;
    }

    public void setAplication_framework_monitoring(Integer aplication_framework_monitoring) {
        this.aplication_framework_monitoring = aplication_framework_monitoring;
    }

    public Integer getReal_user_monitoring() {
        return this.real_user_monitoring;
    }

    public void setReal_user_monitoring(Integer real_user_monitoring) {
        this.real_user_monitoring = real_user_monitoring;
    }

    public Integer getCollect_correlate_custom_metrics() {
        return this.collect_correlate_custom_metrics;
    }

    public void setCollect_correlate_custom_metrics(Integer collect_correlate_custom_metrics) {
        this.collect_correlate_custom_metrics = collect_correlate_custom_metrics;
    }

    public Integer getIntegration_with_third_party_tools() {
        return this.integration_with_third_party_tools;
    }

    public void setIntegration_with_third_party_tools(Integer integration_with_third_party_tools) {
        this.integration_with_third_party_tools = integration_with_third_party_tools;
    }

    public Integer getApplication_monitoring() {
        return this.application_monitoring;
    }

    public void setApplication_monitoring(Integer application_monitoring) {
        this.application_monitoring = application_monitoring;
    }

    public Integer getIntegration_plugins() {
        return this.integration_plugins;
    }

    public void setIntegration_plugins(Integer integration_plugins) {
        this.integration_plugins = integration_plugins;
    }

    public Integer getAutomation_performance_issue_remediation() {
        return this.automation_performance_issue_remediation;
    }

    public void setAutomation_performance_issue_remediation(Integer automation_performance_issue_remediation) {
        this.automation_performance_issue_remediation = automation_performance_issue_remediation;
    }

    public Integer getEasy_configuration_wizard() {
        return this.easy_configuration_wizard;
    }

    public void setEasy_configuration_wizard(Integer easy_configuration_wizard) {
        this.easy_configuration_wizard = easy_configuration_wizard;
    }

    public Long getTool_id() {
        return this.tool_id;
    }

    public void setTool_id(Long tool_id) {
        this.tool_id = tool_id;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}