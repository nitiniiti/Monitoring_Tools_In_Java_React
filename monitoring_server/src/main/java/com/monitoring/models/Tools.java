
package com.monitoring.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "tools")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Tools {

    public Tools() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String tool_name;

    private String product_name;

    private String tool_type;

    private String open_source;

    private String community_support;

    @Column(columnDefinition = "TEXT")
    private String core_competency;

    @Column(columnDefinition = "TEXT")
    private String features;

    private boolean dashboard_capabilities;

    @Column(columnDefinition = "TEXT")
    private String installation;

    @Column(columnDefinition = "TEXT")
    private String environment_coverage;

    private String license_type;

    private String pricing;

    private String support;

    private String cost;

    @OneToOne(mappedBy = "tool", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
    @JsonIgnore
    private Ratings rating;

    public Ratings getRating() {
        return this.rating;
    }

    public void setRating(Ratings rating) {
        this.rating = rating;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTool_name() {
        return this.tool_name;
    }

    public void setTool_name(String tool_name) {
        this.tool_name = tool_name;
    }

    public String getProduct_name() {
        return this.product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getTool_type() {
        return this.tool_type;
    }

    public void setTool_type(String tool_type) {
        this.tool_type = tool_type;
    }

    public String getOpen_source() {
        return this.open_source;
    }

    public void setOpen_source(String open_source) {
        this.open_source = open_source;
    }

    public String getCommunity_support() {
        return this.community_support;
    }

    public void setCommunity_support(String community_support) {
        this.community_support = community_support;
    }

    public String getCore_competency() {
        return this.core_competency;
    }

    public void setCore_competency(String core_competency) {
        this.core_competency = core_competency;
    }

    public String getFeatures() {
        return this.features;
    }

    public void setFeatures(String features) {
        this.features = features;
    }

    public boolean isDashboard_capabilities() {
        return this.dashboard_capabilities;
    }

    public void setDashboard_capabilities(boolean dashboard_capabilities) {
        this.dashboard_capabilities = dashboard_capabilities;
    }

    public String getInstallation() {
        return this.installation;
    }

    public void setInstallation(String installation) {
        this.installation = installation;
    }

    public String getEnvironment_coverage() {
        return this.environment_coverage;
    }

    public void setEnvironment_coverage(String environment_coverage) {
        this.environment_coverage = environment_coverage;
    }

    public String getLicense_type() {
        return this.license_type;
    }

    public void setLicense_type(String license_type) {
        this.license_type = license_type;
    }

    public String getPricing() {
        return this.pricing;
    }

    public void setPricing(String pricing) {
        this.pricing = pricing;
    }

    public String getSupport() {
        return this.support;
    }

    public void setSupport(String support) {
        this.support = support;
    }

    public String getCost() {
        return this.cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

}

enum ToolType {
    monitoring_tool, visualization_tool
}

enum CommunitySupport {
    medium, strong
}

enum LicenseType {
    enterprise, pro, freeware, power
}