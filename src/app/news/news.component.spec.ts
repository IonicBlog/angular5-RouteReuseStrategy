import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NewsComponent } from "./news.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NewsComponent", () => {

  let fixture: ComponentFixture<NewsComponent>;
  let component: NewsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NewsComponent]
    });

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
